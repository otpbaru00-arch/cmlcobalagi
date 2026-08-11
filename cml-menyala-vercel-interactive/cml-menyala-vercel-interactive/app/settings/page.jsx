import MainLayout from '../../components/Layout';
export default function Settings(){
return <MainLayout><main style={{padding:30}}>
<h1>Meta WhatsApp Connection</h1>
<input placeholder="Phone Number ID"/><br/><br/>
<input placeholder="Access Token"/><br/><br/>
<button>Connect Meta</button>
</main></MainLayout>
}
