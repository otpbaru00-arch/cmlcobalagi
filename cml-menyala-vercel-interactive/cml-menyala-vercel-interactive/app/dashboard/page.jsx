import MainLayout from '../../components/Layout';
export default function Dashboard(){
return <MainLayout><main style={{padding:30}}>
<h1>CML Menyala Dashboard</h1>
<div style={{display:'flex',gap:20}}>
{[
['WhatsApp','🟢 Connected'],
['Messages','12540'],
['Customers','3245'],
['Agents','8']
].map(x=>
<div style={{background:'white',padding:25,borderRadius:12}}>
<h3>{x[0]}</h3><b>{x[1]}</b>
</div>)}
</div>
</main></MainLayout>
}
