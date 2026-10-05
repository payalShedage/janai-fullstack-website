import React, { useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import { api } from "./api";

const phone = "8600208414";
const whatsapp = `https://wa.me/91${phone}`;

function PublicSite() {
  const [form, setForm] = useState({ name: "", phone: "", location: "", service: "विहिरीतील गाळ काढणे", message: "" });
  const [status, setStatus] = useState("");

  async function submit(e) {
    e.preventDefault();
    setStatus("नोंदवत आहे...");
    try {
      await api("/enquiries", { method: "POST", body: JSON.stringify(form) });
      setStatus("धन्यवाद! आपली चौकशी नोंदवली आहे. आम्ही लवकरच संपर्क करू.");
      setForm({ name: "", phone: "", location: "", service: "विहिरीतील गाळ काढणे", message: "" });
    } catch (err) {
      setStatus(err.message);
    }
  }

  return (
    <div className="site">
      <header className="navbar">
        <a href="#home" className="brand"><span>जानाई</span><small>उद्योग समूह राजाळे</small></a>
        <nav>
          <a href="#home">मुख्यपृष्ठ</a><a href="#services">सेवा</a><a href="#machine">आमची मशीन</a>
          <a href="#work">आमचे काम</a><a href="#enquiry">चौकशी</a><a href="#contact">संपर्क</a>
        </nav>
        <a className="nav-wa" href={whatsapp} target="_blank" rel="noreferrer">💬 WhatsApp</a>
      </header>

      <section id="home" className="hero">
        <div>
          <span className="eyebrow">विहीर • शेततळे • मशीन भाडे</span>
          <h1>विहीर व शेततळ्यातील <strong>गाळ काढण्याची सेवा</strong></h1>
          <p>मड पंपाच्या सहाय्याने <b>५० ते १०० फूट खोलीपर्यंत</b> गाळ काढून मिळेल.</p>
          <div className="yellow-badge">५० – १०० फूट खोलीपर्यंत सेवा</div>
          <div className="hero-points"><span>🚜 शक्तिशाली मड पंप</span><span>💧 विहीर साफसफाई</span><span>🌾 शेततळे साफसफाई</span><span>🔧 मशीन भाड्याने</span></div>
          <div className="buttons"><a className="btn primary" href={`tel:${phone}`}>📞 आत्ताच कॉल करा</a><a className="btn lightbtn" href={whatsapp} target="_blank" rel="noreferrer">💬 WhatsApp</a></div>
          <div className="owner">संपर्क : <b>रोहन निंबाळकर</b> • {phone}</div>
        </div>
        <div className="hero-img"><img src="/images/mud-pump.jpeg" alt="मड पंप मशीन" /></div>
      </section>

      <section id="services" className="section pale">
        <div className="heading"><span>आमच्या सेवा</span><h2>आपल्यासाठी आम्ही काय करतो?</h2><p>शेतकरी आणि विहीर मालकांसाठी मशीनद्वारे गाळ काढण्याची सुविधा.</p></div>
        <div className="cards">
          {[
            ["🕳️","विहिरीतील गाळ काढणे","विहिरीतील साचलेला गाळ व माती मड पंपाने बाहेर काढण्याची सेवा."],
            ["🌾","शेततळे साफसफाई","शेततळ्यातील गाळ काढून पाणीसाठवण क्षमता वाढवण्यासाठी मदत."],
            ["🚜","मशीन भाड्याने","आवश्यकतेनुसार मड पंप मशीन भाड्याने उपलब्ध."],
            ["🔧","पूर्ण सेवा","कामाची माहिती घेऊन योग्य मशीन व कामाच्या पद्धतीबाबत मार्गदर्शन."]
          ].map(([icon,title,text]) => <article className="card" key={title}><div className="icon">{icon}</div><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </section>

      <section id="work" className="work">
        <div className="heading white"><span>आमचे प्रत्यक्ष काम</span><h2>मशीन कशी काम करते ते पहा</h2><p>खरे काम • खरी मशीन • खरे परिणाम</p></div>
        <div className="videos">
          <div><video controls preload="metadata"><source src="/videos/janai-work-1.mp4" type="video/mp4"/></video><h3>प्रत्यक्ष कामाचा व्हिडिओ</h3></div>
          <div><video controls preload="metadata"><source src="/videos/janai-work-2.mp4" type="video/mp4"/></video><h3>गाळ बाहेर काढण्याचे काम</h3></div>
        </div>
      </section>

      <section id="machine" className="section machine">
        <div><img src="/images/mud-pump.jpeg" alt="जानाई मड पंप" className="machine-img"/></div>
        <div>
          <span className="label">आमची मशीन</span><h2>शक्तिशाली मड पंप मशीन</h2>
          <p>विहीर आणि शेततळ्यातील गाळ काढण्यासाठी वापरली जाणारी मशीन. मशीन भाड्याने घेण्यासाठी थेट संपर्क करा.</p>
          <ul><li>✓ विहीर व शेततळ्यासाठी उपयुक्त</li><li>✓ ५० ते १०० फूट खोलीपर्यंत सेवा</li><li>✓ मशीन भाड्याने उपलब्ध</li></ul>
          <div className="buttons"><a className="btn primary" href={whatsapp} target="_blank" rel="noreferrer">🚜 मशीन भाड्याने हवी?</a><a className="btn outline" href={`tel:${phone}`}>📞 रोहन यांना कॉल</a></div>
        </div>
        <img src="/images/janai-poster.jpeg" alt="जानाई जाहिरात" className="poster"/>
      </section>

      <section className="section gallery">
        <div className="heading"><span>जानाईचे काम</span><h2>आमची गॅलरी</h2><p>तुमचे Before / After फोटो आपण येथे जोडू शकतो.</p></div>
        <div className="gallery-grid"><img src="/images/janai-poster.jpeg" alt="पोस्टर"/><img src="/images/mud-pump.jpeg" alt="मशीन"/><div className="placeholder">📸<br/>Before / After फोटो</div><div className="placeholder">🎥<br/>आणखी कामाचे व्हिडिओ</div></div>
      </section>

      <section id="enquiry" className="section enquiry">
        <div className="heading"><span>ऑनलाइन चौकशी</span><h2>कामासाठी माहिती पाठवा</h2><p>तुमची माहिती भरल्यावर ती थेट जानाईच्या व्यवस्थापनात नोंदवली जाईल.</p></div>
        <form onSubmit={submit} className="form">
          <input required placeholder="आपले नाव" value={form.name} onChange={e=>setForm({...form,name:e.target.value})}/>
          <input required placeholder="मोबाईल नंबर" value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})}/>
          <input placeholder="गाव / ठिकाण" value={form.location} onChange={e=>setForm({...form,location:e.target.value})}/>
          <select value={form.service} onChange={e=>setForm({...form,service:e.target.value})}><option>विहिरीतील गाळ काढणे</option><option>शेततळे साफसफाई</option><option>मशीन भाड्याने</option><option>इतर</option></select>
          <textarea placeholder="कामाबद्दल थोडक्यात माहिती" value={form.message} onChange={e=>setForm({...form,message:e.target.value})}/>
          <button className="btn primary" type="submit">चौकशी पाठवा</button>
          {status && <p className="form-status">{status}</p>}
        </form>
      </section>

      <section className="contact" id="contact">
        <div><span className="label">संपर्क करा</span><h2>विहीर किंवा शेततळ्यातील गाळ काढायचा आहे?</h2><p>मशीन भाड्याने किंवा कामासाठी आजच संपर्क करा.</p></div>
        <div className="contact-box"><b>👤 रोहन निंबाळकर</b><a href={`tel:${phone}`}>📞 {phone}</a><a className="btn primary" href={whatsapp} target="_blank" rel="noreferrer">💬 WhatsApp</a></div>
      </section>

      <section className="instagram"><div><b>📸 Instagram वर आम्हाला फॉलो करा</b><span>नवीन कामाचे व्हिडिओ आणि अपडेट्स पाहा.</span></div><a className="btn insta" href="https://www.instagram.com/reel/DVDPToeEzvB/?stkn=MXVoMTlrM2dweWlvMA==" target="_blank" rel="noreferrer">Instagram उघडा ↗</a></section>

      <footer><div className="brand foot">जानाई<small>उद्योग समूह राजाळे</small></div><span>© 2026 जानाई • सर्व हक्क राखीव</span><b>📞 {phone}</b></footer>
    </div>
  );
}

function Login({ onLogin }) {
  const [email,setEmail]=useState("admin@janai.com");
  const [password,setPassword]=useState("");
  const [error,setError]=useState("");
  async function submit(e) {
    e.preventDefault(); setError("");
    try {
      const data = await api("/auth/login",{method:"POST",body:JSON.stringify({email,password})});
      localStorage.setItem("janai_token",data.token); onLogin();
    } catch(err) { setError(err.message); }
  }
  return <div className="admin-wrap"><form className="login" onSubmit={submit}><div className="brand center">जानाई<small>व्यवस्थापन</small></div><h2>Admin Login</h2><p>फक्त व्यवसाय मालकासाठी</p><input type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email"/><input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="Password"/><button className="btn primary" type="submit">Login</button>{error&&<div className="error">{error}</div>}<a href="/">← वेबसाइटवर जा</a></form></div>;
}

function AdminDashboard({ onLogout }) {
  const [jobs,setJobs]=useState([]), [expenses,setExpenses]=useState([]), [enquiries,setEnquiries]=useState([]);
  const [job,setJob]=useState({customerName:"",phone:"",location:"",service:"विहिरीतील गाळ काढणे",date:new Date().toISOString().slice(0,10),amount:"",notes:""});
  const [expense,setExpense]=useState({title:"",category:"डिझेल",date:new Date().toISOString().slice(0,10),amount:"",notes:""});
  const [msg,setMsg]=useState("");

  async function load() {
    try { const [j,e,q]=await Promise.all([api("/jobs"),api("/expenses"),api("/enquiries")]); setJobs(j);setExpenses(e);setEnquiries(q); }
    catch { localStorage.removeItem("janai_token"); onLogout(); }
  }
  useEffect(()=>{load()},[]);

  const income=useMemo(()=>jobs.reduce((s,x)=>s+Number(x.amount||0),0),[jobs]);
  const exp=useMemo(()=>expenses.reduce((s,x)=>s+Number(x.amount||0),0),[expenses]);
  const profit=income-exp;

  async function addJob(e){e.preventDefault();await api("/jobs",{method:"POST",body:JSON.stringify({...job,amount:Number(job.amount)})});setJob({...job,customerName:"",phone:"",location:"",amount:"",notes:""});setMsg("कामाची नोंद झाली.");load();}
  async function addExpense(e){e.preventDefault();await api("/expenses",{method:"POST",body:JSON.stringify({...expense,amount:Number(expense.amount)})});setExpense({...expense,title:"",amount:"",notes:""});setMsg("खर्चाची नोंद झाली.");load();}
  async function del(path){if(confirm("ही नोंद हटवायची का?")){await api(path,{method:"DELETE"});load();}}
  async function status(id,status){await api(`/enquiries/${id}/status`,{method:"PATCH",body:JSON.stringify({status})});load();}

  return <div className="dashboard">
    <header className="dash-head"><div className="brand">जानाई<small>व्यवस्थापन डॅशबोर्ड</small></div><button className="btn outline" onClick={()=>{localStorage.removeItem("janai_token");onLogout()}}>Logout</button></header>
    <div className="dash-main">
      <div className="stats"><div><span>एकूण उत्पन्न</span><b>₹{income.toLocaleString("en-IN")}</b></div><div><span>एकूण खर्च</span><b>₹{exp.toLocaleString("en-IN")}</b></div><div><span>नफा</span><b>₹{profit.toLocaleString("en-IN")}</b></div><div><span>पूर्ण कामे</span><b>{jobs.length}</b></div></div>
      {msg&&<div className="success">{msg}</div>}
      <div className="admin-grid">
        <section className="panel"><h2>➕ नवीन काम / उत्पन्न</h2><form onSubmit={addJob} className="admin-form">
          <input required placeholder="ग्राहकाचे नाव" value={job.customerName} onChange={e=>setJob({...job,customerName:e.target.value})}/>
          <input placeholder="मोबाईल" value={job.phone} onChange={e=>setJob({...job,phone:e.target.value})}/>
          <input placeholder="गाव / ठिकाण" value={job.location} onChange={e=>setJob({...job,location:e.target.value})}/>
          <select value={job.service} onChange={e=>setJob({...job,service:e.target.value})}><option>विहिरीतील गाळ काढणे</option><option>शेततळे साफसफाई</option><option>मशीन भाड्याने</option><option>इतर</option></select>
          <input required type="date" value={job.date} onChange={e=>setJob({...job,date:e.target.value})}/>
          <input required type="number" min="0" placeholder="मिळालेले पैसे ₹" value={job.amount} onChange={e=>setJob({...job,amount:e.target.value})}/>
          <textarea placeholder="नोंद" value={job.notes} onChange={e=>setJob({...job,notes:e.target.value})}/>
          <button className="btn primary">काम सेव्ह करा</button>
        </form></section>

        <section className="panel"><h2>➕ नवीन खर्च</h2><form onSubmit={addExpense} className="admin-form">
          <input required placeholder="खर्चाचे नाव (उदा. डिझेल)" value={expense.title} onChange={e=>setExpense({...expense,title:e.target.value})}/>
          <input placeholder="प्रकार" value={expense.category} onChange={e=>setExpense({...expense,category:e.target.value})}/>
          <input required type="date" value={expense.date} onChange={e=>setExpense({...expense,date:e.target.value})}/>
          <input required type="number" min="0" placeholder="खर्च ₹" value={expense.amount} onChange={e=>setExpense({...expense,amount:e.target.value})}/>
          <textarea placeholder="नोंद" value={expense.notes} onChange={e=>setExpense({...expense,notes:e.target.value})}/>
          <button className="btn primary">खर्च सेव्ह करा</button>
        </form></section>
      </div>

      <section className="panel table-panel"><h2>💰 कामांची नोंद</h2><div className="table-wrap"><table><thead><tr><th>तारीख</th><th>ग्राहक</th><th>सेवा</th><th>ठिकाण</th><th>रक्कम</th><th></th></tr></thead><tbody>{jobs.map(x=><tr key={x._id}><td>{new Date(x.date).toLocaleDateString("mr-IN")}</td><td>{x.customerName}<br/><small>{x.phone}</small></td><td>{x.service}</td><td>{x.location}</td><td>₹{Number(x.amount).toLocaleString("en-IN")}</td><td><button className="delete" onClick={()=>del(`/jobs/${x._id}`)}>हटवा</button></td></tr>)}{jobs.length===0&&<tr><td colSpan="6">अजून नोंद नाही.</td></tr>}</tbody></table></div></section>

      <section className="panel table-panel"><h2>💸 खर्चांची नोंद</h2><div className="table-wrap"><table><thead><tr><th>तारीख</th><th>खर्च</th><th>प्रकार</th><th>रक्कम</th><th></th></tr></thead><tbody>{expenses.map(x=><tr key={x._id}><td>{new Date(x.date).toLocaleDateString("mr-IN")}</td><td>{x.title}</td><td>{x.category}</td><td>₹{Number(x.amount).toLocaleString("en-IN")}</td><td><button className="delete" onClick={()=>del(`/expenses/${x._id}`)}>हटवा</button></td></tr>)}{expenses.length===0&&<tr><td colSpan="5">अजून खर्च नोंद नाही.</td></tr>}</tbody></table></div></section>

      <section className="panel table-panel"><h2>📩 ग्राहकांच्या चौकश्या</h2><div className="table-wrap"><table><thead><tr><th>नाव</th><th>मोबाईल</th><th>ठिकाण</th><th>सेवा</th><th>स्थिती</th></tr></thead><tbody>{enquiries.map(x=><tr key={x._id}><td>{x.name}</td><td>{x.phone}</td><td>{x.location}</td><td>{x.service}</td><td><select value={x.status} onChange={e=>status(x._id,e.target.value)}><option>नवीन</option><option>संपर्क केला</option><option>पूर्ण</option></select></td></tr>)}{enquiries.length===0&&<tr><td colSpan="5">अजून चौकशी नाही.</td></tr>}</tbody></table></div></section>
    </div>
  </div>;
}

function AdminApp() {
  const [logged,setLogged]=useState(Boolean(localStorage.getItem("janai_token")));
  return logged ? <AdminDashboard onLogout={()=>setLogged(false)}/> : <Login onLogin={()=>setLogged(true)}/>;
}

function App() {
  return window.location.pathname.startsWith("/admin") ? <AdminApp/> : <PublicSite/>;
}

createRoot(document.getElementById("root")).render(<App/>);
