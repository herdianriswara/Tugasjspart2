var namateman = [
{Nama: `IloKece`, Kelas: `XI RPL 1`},
{Nama: `HerzzGeming`, Kelas: `XI RPL 1`},
{Nama: `LupySeni`, Kelas: `XI RPL 2`},
{Nama: `ZhanpareBand`, Kelas: `XI RPL 1`},
{Nama: `AhmadLiheyy`, Kelas: `XI RPL 2`},
{Nama: `FatihJj`, Kelas: `XI RPL 3`},
{Nama: `IlhamModerator`, Kelas: `XI RPL 1`},
{Nama: `DikiSad`, Kelas: `XI RPL 1`},
{Nama: `JohanesWibu`, Kelas: `XI RPL 3`},
{Nama: `AbdulNgabs`, Kelas: `XI RPL 1`},]

console.log();

function Manggil() {
    var nyeleksi = namateman.filter (ngaran =>{
        return ngaran.Kelas == "XI RPL 1"
    });
    console.log(nyeleksi);
}
Manggil();