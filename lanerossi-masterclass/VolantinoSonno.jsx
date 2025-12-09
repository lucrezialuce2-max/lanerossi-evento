import React, { useState } from 'react';
import { Moon, Clock, Calendar, MapPin, CheckCircle, Star, Sparkles, ArrowLeft, Mail, User, CreditCard, Feather, ShieldCheck, Thermometer, Activity } from 'lucide-react';

const App = () => {
  // Stato per gestire la navigazione tra le "pagine"
  const [currentView, setCurrentView] = useState('flyer'); // 'flyer' o 'booking'

  // IMPORTANTE: Assicurati che questi file immagine siano nella stessa cartella (o cartella public)
  // URL dell'immagine di copertina (Mano su materasso Wool Energy)
  const heroImage = "image_a17f73.jpg";
  
  // URL Logo Lanerossi
  const lanerossiLogo = "image_a2e013.png"; 

  const benefits = [
    {
      icon: <Feather size={18} className="text-amber-600" />,
      text: "Il sonno come rituale di benessere profondo e rigenerativo."
    },
    {
      icon: <ShieldCheck size={18} className="text-amber-600" />,
      text: "Wool Energy: l'ecosistema scientifico per il sonno di Lanerossi."
    },
    {
      icon: <Thermometer size={18} className="text-amber-600" />,
      text: "Comfort termico e assorbimento dell'umidità grazie alla lana Merino."
    },
    {
      icon: <Activity size={18} className="text-amber-600" />,
      text: "Sostegno ergonomico e rilassamento profondo con memory e grafite."
    },
    {
      icon: <Moon size={18} className="text-amber-600" />,
      text: "Stabilizzazione del ritmo cardiaco per un riposo continuo."
    }
  ];

  // Componente Pagina Prenotazione
  const BookingPage = () => {
    const [selectedDate, setSelectedDate] = useState('');

    const dates = [
      "9 Maggio, Vicenza",
      "6 Giugno, Roma",
      "11 Luglio, Milano",
      "29 Agosto, Francoforte"
    ];

    return (
    <div className="bg-stone-50 max-w-md w-full shadow-2xl rounded-2xl overflow-hidden flex flex-col h-full animate-fade-in font-serif">
      <div className="bg-stone-200 p-6 text-stone-800 relative border-b border-stone-300">
        <button 
          onClick={() => setCurrentView('flyer')}
          className="absolute top-6 left-4 hover:bg-stone-300 p-2 rounded-full transition-colors"
        >
          <ArrowLeft size={24} />
        </button>
        <div className="flex justify-center mb-2">
            {/* Logo nella pagina di prenotazione */}
            <img src={lanerossiLogo} alt="Lanerossi Logo" className="h-10 object-contain mix-blend-multiply" />
        </div>
        <h2 className="text-2xl font-bold text-center mt-2">Completa la tua Iscrizione</h2>
        <p className="text-stone-600 text-center text-sm mt-1">Unisciti alla rivoluzione del sonno.</p>
      </div>

      <div className="p-8 space-y-6 bg-white">
        <div className="bg-amber-50 p-4 rounded-lg border border-amber-100 text-center">
          <p className="text-lg font-bold text-amber-700 mb-1">30 POSTI DISPONIBILI</p>
          <p className="text-sm text-amber-600">PER OGNI EVENTO</p>
          <p className="text-sm font-bold text-stone-800 mt-2">Prezzo: €25.00</p>
        </div>

        <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert("Iscrizione confermata! (Simulazione)"); }}>
          <div>
            <label className="block text-sm font-medium text-stone-700 mb-1">Nome Completo</label>
            <div className="relative">
              <User className="absolute left-3 top-3 text-stone-400" size={18} />
              <input type="text" placeholder="Nome Cognome" className="w-full pl-10 pr-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none bg-stone-50" required />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-stone-700 mb-1">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 text-stone-400" size={18} />
              <input type="email" placeholder="Yourname@email.com" className="w-full pl-10 pr-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none bg-stone-50" required />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-stone-700 mb-1">Seleziona Data e Luogo</label>
            <div className="relative">
              <Calendar className="absolute left-3 top-3 text-stone-400" size={18} />
              <select 
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none bg-stone-50 appearance-none" 
                required
              >
                <option value="" disabled>Scegli una data</option>
                {dates.map((date, index) => (
                  <option key={index} value={date}>{date}</option>
                ))}
              </select>
              <ArrowLeft className="absolute right-3 top-3 text-stone-400 rotate-90 pointer-events-none" size={18} />
            </div>
          </div>

          <div className="pt-4">
             <button type="submit" className="w-full bg-stone-800 hover:bg-stone-900 text-white font-bold py-3 px-4 rounded-lg shadow-lg transition-colors duration-200 flex items-center justify-center space-x-2">
              <span>Conferma e Paga</span>
              <CreditCard size={18} />
            </button>
            <p className="text-center text-xs text-stone-500 mt-3 flex justify-center items-center">
               <span className="mr-1">Pagamenti sicuri con Stripe</span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
  };

  return (
    <div className="min-h-screen bg-stone-100 flex items-center justify-center p-4 font-serif text-stone-800">
      
      {/* Visualizza la pagina corretta in base allo stato */}
      {currentView === 'flyer' ? (
        <div className="bg-white max-w-md w-full shadow-2xl rounded-2xl overflow-hidden transform transition-transform duration-300">
          
          {/* Header Immagine */}
          <div className="relative h-72 overflow-hidden bg-stone-200">
            <img 
              src={heroImage} 
              alt="Lanerossi Sleep System" 
              className="w-full h-full object-cover"
            />
            {/* Overlay gradiente leggero solo per stacco visivo in basso */}
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 via-transparent to-transparent pointer-events-none"></div>
            
            {/* Logo posizionato in alto con sfondo bianco per visibilità */}
            <div className="absolute top-4 left-0 right-0 flex justify-center p-2">
                 <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-md">
                    <img src={lanerossiLogo} alt="Lanerossi Logo" className="h-8 object-contain" />
                 </div>
            </div>
          </div>

          {/* Corpo del Volantino */}
          <div className="p-6 space-y-6 bg-stone-50">
            
            {/* Sezione Introduttiva */}
            <div className="text-stone-700 text-sm leading-relaxed">
               {/* Titolo principale */}
              <h1 className="text-2xl font-bold text-stone-800 mb-3 leading-tight">
                Masterclass: Il Sonno Rigenerativo
              </h1>

              <p className="mb-2">
                Il sonno è la nuova frontiera del benessere. In un mondo che accelera, dormire bene è un lusso rigenerativo che merita scienza e natura.
              </p>
              <p className="font-medium text-amber-700 mb-4">
                Wool Energy nasce da questa visione: un ecosistema per il sonno che unisce la forza della lana Merino e l'innovazione scientifica per un riposo profondo e misurabile.
              </p>

              {/* Box Experience Area */}
              <div className="bg-white border-l-4 border-amber-500 p-3 shadow-sm rounded-r-md">
                <p className="text-stone-800 font-semibold text-sm flex items-center">
                  <Star size={16} className="text-amber-500 mr-2" fill="currentColor" />
                  Experience Area
                </p>
                <p className="text-xs text-stone-600 mt-1">
                  Durante l'evento avrai l'opportunità esclusiva di <strong>provare dal vivo</strong> i prodotti Lanerossi e testare la qualità Wool Energy.
                </p>
              </div>
            </div>

            {/* Perché Partecipare (Benefici) */}
            <div>
              <h3 className="text-lg font-bold text-stone-800 mb-3 flex items-center">
                <Moon size={20} className="text-amber-600 mr-2" />
                Perché Partecipare
              </h3>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start text-sm text-stone-600">
                    <div className="mt-0.5 mr-3 flex-shrink-0">
                      {benefit.icon}
                    </div>
                    <span>{benefit.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Prezzo e CTA */}
            <div className="flex justify-between items-end">
               <div>
                  <p className="text-xs text-stone-500 mb-1">Investi nel tuo benessere</p>
                  <p className="text-3xl font-bold text-amber-700">€25.00</p>
               </div>
               <button 
                onClick={() => setCurrentView('booking')}
                className="bg-stone-800 hover:bg-stone-900 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-colors duration-200 flex items-center space-x-2"
               >
                <span>Iscriviti Ora</span>
                <ArrowLeft size={18} className="rotate-180" />
               </button>
            </div>
            
            <p className="text-center text-xs text-stone-400 mt-2">
              *Posti limitati. L'evento include una sessione Q&A dedicata.
            </p>
          </div>
        </div>
      ) : (
        <BookingPage />
      )}
    </div>
  );
};

export default App;