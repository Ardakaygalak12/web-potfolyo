document.addEventListener('DOMContentLoaded', async () => {
    const tonConnect = new TonConnect.TonConnect({
        manifestUrl: `${window.location.origin}/tonconnect-manifest.json`
    });

    const connectBtn = document.getElementById('connectBtn');
    const walletAddress = document.getElementById('walletAddress');

    connectBtn.addEventListener('click', async () => {
        try {
            const wallets = await tonConnect.getWallets();
            if (!wallets.length) throw new Error("Cüzdan bulunamadı.");

            const link = await tonConnect.connect({
                universalLink: wallets[0].universalLink,
                returnStrategy: 'back'
            });

            window.open(link, '_blank');
        } catch (error) {
            console.error("Cüzdan bağlama hatası:", error.message || error);
            alert(`Cüzdan bağlama hatası: ${error.message || error}`);
        }
    });
});
