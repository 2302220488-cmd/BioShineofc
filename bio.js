function kirimWA() {
    var nama = document.getElementById("nama").value;
    var varian = document.getElementById("varian").value;
    var jumlah = document.getElementById("jumlah").value;
    var catatan = document.getElementById("catatan").value;

    var pesan =
        "Halo, saya mau pesan BioShine\n\n" +
        "Nama: " + nama + "\n" +
        "Varian: " + varian + "\n" +
        "Jumlah: " + jumlah + "\n" +
        "Catatan: " + catatan;

    var url = "https://wa.me/6283896690924?text=" + encodeURIComponent(pesan);
    window.open(url, "_blank");
}