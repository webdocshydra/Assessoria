const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const cors = require('cors');

const app = express();

// Habilitar CORS
app.use(cors());

app.use('/api', createProxyMiddleware({
    target: 'https://receitaws.com.br',
    changeOrigin: true,
    pathRewrite: {
        '^/api': '', // Remove o prefixo /api ao solicitar o alvo
    },
}));

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Proxy server is running on http://localhost:${PORT}`);
});
