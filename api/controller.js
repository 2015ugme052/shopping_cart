const utils = require('./utils');

const cart = {};

const getCart = (req, res) => {
    res.status(200).json(cart);
};


const addItem = (req, res) => {
    try {
        const item = req.body.item;
        if (!item) return res.status(400).json({ error: 'Item is required' });

        cart[item] = (cart[item] || 0) + 1;
        res.status(201).json({ message: `${item} added`, cart });
    } catch (error) {
        console.error('Error in addItem:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};


const getTotal = async (req, res) => {
    try {
        const input = utils.generateInputArgs(cart);

        const command = `java -cp backend ShoppingCartMain ${input}`;
        const stdout = await utils.executeCommand(command);
        res.status(200).json({ total: parseInt(stdout) });
    } catch (error) {
        console.error('Error in getTotal:', error);
        res.status(500).json({ error: 'Failed to calculate total' });
    }
};


const getCartReport = async (req, res) => {
    try {
        const input = utils.generateInputArgs(cart);
        const command = `java -cp backend ShoppingCartMain ${input}`;
        const total = parseInt(await utils.executeCommand(command));


        const report = { items: cart, total };

        const pythonCommand = `echo '${JSON.stringify(report)}' | python3 reports/generate_report.py`;
        const pythonOutput = await utils.executeCommand(pythonCommand);
        res.status(200).json(JSON.parse(pythonOutput));

    } catch (error) {
        console.error('Error in getCartReport:', error);
        res.status(500).json({ error: 'Failed to generate report' });
    }
};

module.exports = {
    getCart,
    addItem,
    getTotal,
    getCartReport,
};