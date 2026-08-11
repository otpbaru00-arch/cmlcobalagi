export async function GET(req){
let u=new URL(req.url);
return new Response(u.searchParams.get('hub.challenge')||'OK');
}
export async function POST(req){
console.log(await req.json());
return Response.json({ok:true});
}
