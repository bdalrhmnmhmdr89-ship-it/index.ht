const SV=[
["📍 خدمات تحديد وتتبع الهواتف",["تحديد موقع الهاتف المفقود","المساعدة في العثور على الهاتف المسروق","تتبع الهاتف بموافقة صاحبه","تحديد موقع الأجهزة المرتبطة بحسابك","تأمين الهاتف وحماية بياناته","المساعدة في قفل الهاتف المفقود عن بُعد"]],
["📢 إعلانات ممولة",["إعلانات ممولة على فيسبوك","إعلانات ممولة على إنستجرام","زيادة الوصول والتفاعل","الترويج للصفحات والمشروعات","تصميم إعلانات احترافية","استهداف الجمهور المناسب"]],
["🛡️ خدمات فك الحظر واسترجاع الحسابات",["فك حظر حسابات الهوية","مراجعة الحسابات المبندة","استرجاع الحسابات المعطلة","تقديم طلبات استئناف الحظر","حل مشاكل تأكيد الهوية","استعادة الوصول للحسابات","معالجة رفض توثيق الهوية","من خلال الطرق الرسمية للمنصات"]],
["🎮 خدمات تهكير الألعاب ومنصات الدردشة",["اختبار اختراق الألعاب","اختبار أمان منصات الدردشة","فحص الثغرات الأمنية","اختبار حماية الحسابات","تحليل أمان التطبيقات","اختبار أمان المواقع","اكتشاف نقاط الضعف الأمنية"]],
["📱 خدمات السوفت وير لجميع الهواتف",["محو بيانات الجهاز بالكامل","فورمات الهاتف","إعادة ضبط المصنع","تحديث نظام التشغيل","تثبيت الرومات الرسمية","حل مشاكل النظام","إعادة تهيئة الجهاز","نسخ احتياطي للبيانات","استعادة البيانات المتاحة"]],
["🛡️ خدمات قفل واسترجاع الحسابات",["استرجاع الحسابات المعطلة","استرجاع الحسابات المخترقة","قفل الحسابات المزيفة","حذف الحسابات نهائيًا","استرجاع حسابات فيسبوك","استرجاع حسابات إنستجرام","استرجاع حسابات تيك توك","استرجاع حسابات واتساب","استرجاع حسابات تليجرام","تأمين وحماية الحسابات","تقديم طلبات فك الحظر","الإبلاغ عن انتحال الشخصية"]],
["🔵 خدمات التوثيق والحماية الرقمية",["توثيق حسابات فيسبوك","توثيق صفحات فيسبوك","توثيق حسابات إنستجرام","توثيق حسابات تيك توك","توثيق حسابات المشاهير وصناع المحتوى","توثيق حسابات الشركات والعلامات التجارية","توثيق الحسابات التجارية","تجهيز الحسابات للتقديم على العلامة الزرقاء"]],
["🚨 خدمات مكافحة الابتزاز الإلكتروني",["التعامل مع الابتزاز بالصور والفيديوهات","المساعدة في حالات التهديد الإلكتروني","توثيق أدلة الابتزاز والتهديد","الإبلاغ عن الحسابات المبتزة","الإبلاغ عن نشر الصور دون موافقة","إزالة المحتوى المسيء عبر القنوات الرسمية","كشف الحسابات الوهمية والمزيفة","التعامل مع انتحال الشخصية","تأمين الحسابات بعد التعرض للابتزاز","استرداد الحسابات المخترقة","إرشادات لحماية الخصوصية","التواصل مع الجهات المختصة"]],
["🚀 خدمات شحن السوشيال ميديا",["شحن متابعين فيسبوك","شحن لايكات فيسبوك","شحن مشاهدات فيديوهات فيسبوك","شحن متابعين إنستجرام","شحن لايكات إنستجرام","شحن مشاهدات ريلز","شحن متابعين تيك توك","شحن لايكات تيك توك","شحن مشاهدات تيك توك","شحن متابعين يوتيوب","شحن مشتركين يوتيوب","شحن مشاهدات يوتيوب","شحن لايكات يوتيوب","شحن تفاعلات ومنشورات","شحن قنوات تيليجرام","شحن أعضاء ومشاهدات قنوات تيليجرام"]]
].map(([t,a])=>({t,d:a.join("\n")}));
const DEF={name:"متجر الأمن السيبراني المصري",phone:"01036537131",text:"نقدم خدمات رقمية ومساعدة تقنية تركز على الأمان والخصوصية، مع إرشاد واضح وخطوات رسمية لحماية حساباتك واستعادة الوصول إليها.",pass:"admin123",services:SV};
let S;const $=id=>document.getElementById(id);
try{S=JSON.parse(localStorage.getItem("site3")||"null")}catch(e){S=null}
if(!S)S=JSON.parse(JSON.stringify(DEF));
const save=()=>{try{localStorage.setItem("site3",JSON.stringify(S))}catch(e){}};
function wa(m){let p=S.phone.replace(/\D/g,"");if(p.startsWith("0"))p="20"+p.slice(1);return"https://wa.me/"+p+(m?"?text="+encodeURIComponent(m):"")}
let cur="";
function render(){

$("heroName").textContent=S.name;$("footerName").textContent=S.name;$("heroText").textContent=S.text;$("phoneText").textContent=S.phone;$("phoneText").href="tel:+"+wa().split("wa.me/")[1].split("?")[0];$("year").textContent=new Date().getFullYear();
["navWhats","heroWhats","contactWhats"].forEach(i=>$(i).href=wa());
const g=$("serviceGrid");g.innerHTML="";
if(!S.services.length){g.innerHTML="<div class='card'><h3>لا توجد خدمات حالياً</h3><p>أضف خدماتك من لوحة التحكم.</p></div>"}
S.services.forEach(s=>{const c=document.createElement("div");c.className="card";const h=document.createElement("h3");h.textContent=s.t;const p=document.createElement("div");p.className="chips";s.d.split("\n").filter(Boolean).forEach(x=>{const i=document.createElement("span");i.textContent=x;p.append(i)});
const b=document.createElement("button");b.className="btn";b.textContent="اطلب الخدمة";const op=()=>{cur=s.t;$("orderTitle").textContent="طلب: "+s.t;$("customerProblem").value="";$("serviceOrderScreen").classList.add("on");setTimeout(()=>$("customerProblem").focus(),50)};b.onclick=e=>{e.stopPropagation();op()};c.onclick=op;c.append(h,p,b);g.append(c)});
const m=$("serviceManager");m.innerHTML="";
S.services.forEach((s,i)=>{const r=document.createElement("div");r.className="srv";const n=document.createElement("span");n.textContent=s.t;const x=document.createElement("button");x.textContent="حذف";x.onclick=()=>{S.services.splice(i,1);save();render()};r.append(n,x);m.append(r)});
}
$("sendServiceWhats").onclick=()=>{const t=$("customerProblem").value.trim();if(!t){$("customerProblem").focus();return}open(wa("الخدمة: "+cur+"\nالتفاصيل: "+t),"_blank");$("serviceOrderScreen").classList.remove("on")};
$("backToServices").onclick=()=>$("serviceOrderScreen").classList.remove("on");
$("openAdmin").onclick=()=>$("adminModal").classList.add("on");
$("closeAdmin").onclick=()=>$("adminModal").classList.remove("on");
$("loginBtn").onclick=()=>{if($("pass").value===S.pass){$("loginBox").classList.add("hidden");$("panel").classList.remove("hidden");$("editName").value=S.name;$("editPhone").value=S.phone;$("editText").value=S.text}else alert("كلمة المرور غير صحيحة")};
$("logoutBtn").onclick=()=>{$("panel").classList.add("hidden");$("loginBox").classList.remove("hidden");$("pass").value=""};
$("addService").onclick=()=>{const t=$("newTitle").value.trim(),d=$("newDesc").value.trim();if(!t)return;S.services.push({t,d});$("newTitle").value=$("newDesc").value="";save();render()};
$("saveBtn").onclick=()=>{S.name=$("editName").value.trim()||S.name;S.phone=$("editPhone").value.trim()||S.phone;S.text=$("editText").value.trim()||S.text;save();render();alert("تم الحفظ ✔")};
$("changePassBtn").onclick=()=>{if($("currentPass").value!==S.pass)return alert("كلمة المرور الحالية غير صحيحة");const n=$("newPass").value;if(n.length<4)return alert("كلمة المرور قصيرة");if(n!==$("confirmPass").value)return alert("التأكيد غير مطابق");S.pass=n;save();["currentPass","newPass","confirmPass"].forEach(i=>$(i).value="");alert("تم تغيير كلمة المرور ✔")};
render();
(function(){const c=$("matrixBg"),x=c.getContext("2d"),ch="01ABCDEF{}<>/$#".split("");let w,h,d;
function size(){w=c.width=innerWidth;h=c.height=innerHeight;d=Array(Math.floor(w/16)).fill(0).map(()=>Math.random()*h/16)}
size();addEventListener("resize",size);
setInterval(()=>{x.fillStyle="rgba(7,11,20,.08)";x.fillRect(0,0,w,h);x.fillStyle="#2f8bff";x.font="14px monospace";
d.forEach((v,i)=>{x.fillText(ch[Math.floor(Math.random()*ch.length)],i*16,v*16);if(v*16>h&&Math.random()>.975)d[i]=0;d[i]++})},60)})();
