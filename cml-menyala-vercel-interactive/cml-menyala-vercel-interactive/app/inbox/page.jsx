import MainLayout from '../../components/Layout';
export default function Inbox(){
return <MainLayout><main style={{padding:30}}>
<h1>WhatsApp Inbox</h1>
<div style={{background:'white',padding:20}}>
<p>Budi: Halo kak</p>
<p>Siti: Tanya produk</p>
<input placeholder="Balas pesan"/>
<button>Kirim</button>
</div>
</main></MainLayout>
}
