// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca
const firstUser = {};
const secondUser = {};

// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [];

// Struktur data untuk firstUser
firstUser.name = "Monica";
firstUser.gender = "Famale";
firstUser.age = 17;
firstUser.email = "monica@dingdong.com";
firstUser.favoriteColor = [];
firstUser.favoriteColor.push("Yellow", "Pink", "White", "Purple");
firstUser.isHavePet = true;
firstUser.education = [];
firstUser.education.push(
    {
        name : "SD 01",
        city: "Jakarta",
        graduate : 2016
    },
    {
        name : "SMP 02",
        city: "Jakarta",
        graduate : 2019
    },
    {
        name : "SMA 03",
        city: "Tangerang",
    }
)
firstUser.favoriteRestaurant = [];
firstUser.favoriteRestaurant.push("Bento", "Sushi", "Pancake", "Eggy", "Tempura", "Padang", "Tteok", "Sushi");

//Structur data untuk secondUser
secondUser.name = "Wendy";
secondUser.gender = "Male";
secondUser.age = 23;
secondUser.email = "wendy@dingdong.com";
secondUser.favoriteColor = [];
secondUser.favoriteColor.push("Blue", "Black", "Gray");
secondUser.isHavePet = false;
secondUser.education = [];
secondUser.education.push(
    {
        name : "SD 02",
        city: "Jakarta",
        graduate : 2010
    },
    {
        name : "SMP 03",
        city: "Bogor",
        graduate : 2013
    },
    {
        name : "SMA 01",
        city: "Surabaya",
        graduate: 2016
    },
    {
        name: "Universitas Maju",
        city: "Tanggerang"
    }
)
secondUser.favoriteRestaurant = [];
secondUser.favoriteRestaurant.push("Tempura","Bento", "Sushi", "Pancake", "Padang", "Katsu", "Geprek", "Eggy");

users.push(firstUser, secondUser)

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
    console.log(users.length || users.size);
    console.log(users);
}

main();

module.exports = {
    users
};