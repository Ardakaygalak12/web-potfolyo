import { TonConnect } from 'https://cdn.jsdelivr.net/npm/@tonconnect/sdk@2.0.0/dist/tonconnect.min.js';

document.addEventListener("DOMContentLoaded", async () => {
    const tonConnect = new TonConnect({
        manifestUrl: `${window.location.origin}/tonconnect-manifest.json`
    });

    document.getElementById("connectBtn").addEventListener("click", async () => {
        try {
            const wallets = await tonConnect.getWallets();
            if (wallets.length === 0) throw new Error("Cüzdan bulunamadı.");

            const link = await tonConnect.connect({
                universalLink: wallets[0].universalLink,
                returnStrategy: "back"
            });

            window.open(link, "_blank");
        } catch (error) {
            console.error("Bağlantı hatası:", error.message);
        }
    });
});
