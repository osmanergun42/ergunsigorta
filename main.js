document.addEventListener("DOMContentLoaded", function () {

    const bireyselBtn = document.getElementById("bireyselBtn");
    const kurumsalBtn = document.getElementById("kurumsalBtn");
    const teklifForm = document.getElementById("teklifForm");

    const bireyselAlanlar = document.getElementById("bireyselAlanlar");
    const kurumsalAlanlar = document.getElementById("kurumsalAlanlar");

    let musteriTipi = "Bireysel"; 

    // Bireysel - Kurumsal buton geçişleri
    bireyselBtn.addEventListener("click", function () {
        musteriTipi = "Bireysel";
        bireyselBtn.classList.add("active");
        kurumsalBtn.classList.remove("active");
        bireyselAlanlar.style.display = "block";
        kurumsalAlanlar.style.display = "none";
    });

    kurumsalBtn.addEventListener("click", function () {
        musteriTipi = "Kurumsal";
        kurumsalBtn.classList.add("active");
        bireyselBtn.classList.remove("active");
        bireyselAlanlar.style.display = "none";
        kurumsalAlanlar.style.display = "block";
    });

    // URL'den sigorta türünü otomatik işaretle
    const urlParams = new URLSearchParams(window.location.search);
    const seciliTur = urlParams.get("tur");

    if (seciliTur) {
        const checkbox = Array.from(document.querySelectorAll('.sigorta-turleri input')).find(cb => cb.value === seciliTur);
        if (checkbox) {
            checkbox.checked = true;
        }
    }

    // Form submit işlemi
    teklifForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const secilenTurler = Array.from(document.querySelectorAll('.sigorta-turleri input[type="checkbox"]:checked'))
            .map(cb => cb.value);

        if (secilenTurler.length === 0) {
            alert("Lütfen en az bir sigorta türü seçiniz.");
            return;
        }

        if (!document.getElementById("kvkk").checked || !document.getElementById("sozlesme").checked) {
            alert("Lütfen KVKK ve Kullanıcı Sözleşmesini onaylayınız.");
            return;
        }

        const telefon = document.getElementById("telefon").value.trim();
        const email = document.getElementById("email").value.trim();

        let mesaj = `Sigorta Teklifi Talebi:\nMüşteri Türü: ${musteriTipi}`;
        mesaj += `\nSigorta Türleri:\n- ${secilenTurler.join("\n- ")}`;

        if (musteriTipi === "Bireysel") {
            const tc = document.getElementById("tc").value.trim();
            const dogum = document.getElementById("dogum").value;
            mesaj += `\nT.C: ${tc}\nDoğum Tarihi: ${dogum}`;
        } else {
            const vergi = document.getElementById("vergi").value.trim();
            mesaj += `\nVergi No: ${vergi}`;
        }

        mesaj += `\nTelefon: ${telefon}\nEmail: ${email}`;

        const whatsappNumara = "905357284455";
        const whatsappLink = `https://wa.me/${whatsappNumara}?text=${encodeURIComponent(mesaj)}`;

        window.open(whatsappLink, '_blank');
    });
});
