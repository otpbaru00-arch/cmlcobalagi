import Link from 'next/link';

export default function Sidebar(){
return <aside style={{
width:240,minHeight:'100vh',
background:'#111827',color:'white',
padding:20
}}>
<h2>CML Menyala</h2>
<Link href="/dashboard">Dashboard</Link>
<Link href="/inbox">Inbox WhatsApp</Link>
<Link href="/customers">Customer CRM</Link>
<Link href="/campaigns">Campaign</Link>
<Link href="/automation">Automation</Link>
<Link href="/settings">Meta Connection</Link>
</aside>
}
