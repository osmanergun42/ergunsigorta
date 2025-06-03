// Modal açma ve kapama işlemleri
const modal = document.getElementById("formModal");
const zeyilBtn = document.getElementById("zeyilBtn");
const iptalBtn = document.getElementById("iptalBtn");
const spanClose = document.getElementsByClassName("close")[0];

// Modal açma
zeyilBtn.onclick = () => { modal.style.display = "block"; }
iptalBtn.onclick = () => { modal.style.display = "block"; }

// Modal kapama
spanClose.onclick = () => { modal.style.display = "none"; }
window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Gönder Butonu (Form kontrolü yaparak gönderme)
document.getElementById("gonderBtn").addEventListener("click", () => {
    const policeNo = document.getElementById("policeNo").value.trim();
    const tcVergi = document.getElementById("tcVergi").value.trim();
    const dogumTarihi = document.getElementById("dogumTarihi").value;
    const ad = document.getElementById("ad").value.trim();
    const soyad = document.getElementById("soyad").value.trim();
    const cepTel = document.getElementById("cepTel").value.trim();
    const urunRadio = document.querySelector('input[name="urun"]:checked');
    
    if (!policeNo || !tcVergi || !ad || !soyad || !cepTel || !urunRadio) {
        alert("Lütfen tüm alanları doldurun.");
        return;
    }

    const urun = urunRadio.value;
    const mesaj = `Poliçe İşlemi Talebi:
Poliçe No: ${policeNo}
T.C./Vergi No: ${tcVergi}
Doğum Tarihi: ${dogumTarihi}
Ad Soyad: ${ad} ${soyad}
Telefon: ${cepTel}
İşlem Türü: ${urun}`;

    const whatsappNumara = "905357284455";
    const whatsappLink = `https://wa.me/${whatsappNumara}?text=${encodeURIComponent(mesaj)}`;
    window.open(whatsappLink, '_blank');
});

// Bizimle İletişime Geç Butonu (Direkt WP)
document.getElementById("wpDirectBtn").addEventListener("click", () => {
    const whatsappNumara = "905357284455";
    const mesaj = `Merhaba, poliçe işlemleri için sizinle iletişime geçmek istiyorum.`;
    const whatsappLink = `https://wa.me/${whatsappNumara}?text=${encodeURIComponent(mesaj)}`;
    window.open(whatsappLink, '_blank');
});
