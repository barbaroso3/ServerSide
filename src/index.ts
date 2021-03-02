import app from '../server/app';

const PORT = 7000;
app.listen(PORT, () => {
    console.info(`Express server listening on http://localhost:${PORT}`);
});