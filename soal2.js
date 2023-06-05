const mtk = 80;
const bahasaIndonesia = 90;
const bahasaInggris = 88;
const ipa = 80;

const validasi = (mtk, bahasaIndonesia, bahasaInggris, ipa) => {
    if (typeof mtk !== "number" || typeof bahasaIndonesia !== "number" || typeof bahasaInggris !== "number" || typeof ipa !== "number") {
        console.log("nilai harus angka");
    }
}

const mean = (mtk, bahasaIndonesia, bahasaInggris, ipa) => {
    validasi(mtk, bahasaIndonesia, bahasaInggris, ipa);
    let result = (mtk + bahasaIndonesia + bahasaInggris + ipa) / 4
    console.log(`Rata-rata = ${result}`);
    grade(result);
}

const grade = (mean) => {
    const gradeValue =
        mean >= 90 && mean <= 100 ? "A" :
            mean >= 80 && mean <= 89 ? "B" :
                mean >= 70 && mean <= 79 ? "C" :
                    mean >= 60 && mean <= 69 ? "D" :
                        mean >= 0 && mean <= 59 ? "E" :
                            "Nilai tidak valid";
    console.log(`Grade = ${gradeValue}`);
}
mean(mtk, bahasaIndonesia, bahasaInggris, ipa)


