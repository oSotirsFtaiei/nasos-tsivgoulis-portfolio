/* ============================================================
   Dr. Nasos Tsivgoulis — Clinic Website
   Language switching (EN / ΕΛ), scroll effects, nav, form
   ============================================================ */

"use strict";

/* ------------------------------------------------------------
   Translations
   ------------------------------------------------------------ */
const I18N = {
  en: {
    "meta.title": "Dr. Nasos Tsivgoulis — Neurorehabilitation · Aesthetic Rehabilitation · Regenerative Medicine",

    "nav.about": "About",
    "nav.services": "Services",
    "nav.clinics": "Clinics",
    "nav.publications": "Publications",
    "nav.media": "Media",
    "nav.conferences": "Conferences",
    "nav.contact": "Contact",
    "nav.book": "Book Appointment",

    "hero.badge": "Neurological Rehabilitation Medicine",
    "hero.title1": "Restoring Function.",
    "hero.title2": "Elevating Life.",
    "hero.sub": "Advanced neurorehabilitation, aesthetic rehabilitation and regenerative medicine — personalized for you.",
    "hero.cta1": "Book Appointment",
    "hero.cta2": "Discover Our Approach",
    "hero.stat1": "Years of Experience",
    "hero.stat2": "Private Clinics",
    "hero.stat3": "Scientific Publications",
    "hero.cardTitle": "Neurorehabilitation",
    "hero.cardSub": "Restoring the body's finest connections",

    "pillar1.t": "Science Driven",
    "pillar1.d": "Evidence-based medicine",
    "pillar2.t": "Personalized Care",
    "pillar2.d": "Tailored to your unique needs",
    "pillar3.t": "Innovative Therapies",
    "pillar3.d": "Cutting-edge regenerative solutions",
    "pillar4.t": "Holistic Wellness",
    "pillar4.d": "Body, mind & function in harmony",

    "about.label": "About the Doctor",
    "about.title": "Dr. Nasos Tsivgoulis",
    "about.photo": "Physician portrait",
    "about.badge": "Neurological Rehabilitation Medicine",
    "about.p1": "Dr. Nasos Tsivgoulis is a physician with strong foundations in Neurological Rehabilitation Medicine, dedicated to restoring movement, independence and quality of life for his patients.",
    "about.p2": "Combining evidence-based neurorehabilitation with aesthetic rehabilitation and regenerative medicine, he designs personalized treatment programs that address the whole person — not just the condition. His approach unites precision in science with genuine compassion in care.",
    "about.h1": "Specialized in neurological rehabilitation & functional recovery",
    "about.h2": "Advanced training in regenerative & musculoskeletal medicine",
    "about.h3": "Active researcher, author and international speaker",
    "about.link": "View education & training ›",

    "edu.label": "Medical Education & Training",
    "edu.title": "A Foundation of Excellence",
    "edu.sub": "Academic background and clinical training across leading institutions.",
    "edu.i1t": "Doctor of Medicine (MD)",
    "edu.i1d": "School of Medicine, National & Kapodistrian University of Athens, Greece.",
    "edu.i2t": "Residency — Physical Medicine & Rehabilitation",
    "edu.i2d": "Specialty training in Physical & Rehabilitation Medicine, University General Hospital, Athens.",
    "edu.i3t": "Fellowship — Neurorehabilitation",
    "edu.i3d": "Clinical fellowship in Neurological Rehabilitation with emphasis on stroke and neurotrauma recovery.",
    "edu.i4t": "MSc — Regenerative Medicine",
    "edu.i4d": "Postgraduate studies in regenerative and musculoskeletal medicine, with distinction.",
    "edu.i5t": "Continuing Certification & Faculty Roles",
    "edu.i5d": "Certified in interventional ultrasound-guided procedures; invited faculty at European rehabilitation courses.",

    "svc.label": "Our Approach",
    "svc.title": "Areas of Expertise",
    "svc.sub": "Comprehensive, personalized programs built on three complementary disciplines.",
    "svc1.t": "Neurorehabilitation",
    "svc1.d": "Restoring movement, independence and quality of life after stroke, brain and spinal cord injury.",
    "svc2.t": "Aesthetic Rehabilitation",
    "svc2.d": "Enhancing natural beauty and function with medical precision and a conservative philosophy.",
    "svc3.t": "Regenerative Medicine",
    "svc3.d": "Promoting healing and longevity through advanced, minimally invasive biological therapies.",
    "svc4.t": "Whole-Person Approach",
    "svc4.d": "Treating the root cause for lasting, meaningful results in health and daily function.",

    "quote.text": "Precision in science. Compassion in care. Excellence in results.",

    "clinics.label": "Clinics",
    "clinics.title": "Where to Find Us",
    "clinics.sub": "Two modern private clinics, designed around patient comfort and clinical excellence.",
    "clinics.book": "Book at this clinic ›",
    "clinic1.name": "Athens — Kolonaki Clinic",
    "clinic1.addr": "12 Skoufa Street, Kolonaki, 106 73 Athens",
    "clinic1.hours": "Mon – Fri: 09:00 – 20:00 · Sat: by appointment",
    "clinic2.name": "Glyfada — Coastal Clinic",
    "clinic2.addr": "45 Grigoriou Lampraki Avenue, 166 74 Glyfada",
    "clinic2.hours": "Tue & Thu: 10:00 – 19:00 · Sat: 10:00 – 14:00",

    "pubs.label": "Publications",
    "pubs.title": "Selected Scientific Work",
    "pubs.sub": "Peer-reviewed research contributing to the advancement of rehabilitation medicine.",
    "pubs.view": "View",
    "pubs.note": "Full publication list available on request or via academic profiles below.",
    "pub1.t": "Early intensive neurorehabilitation after ischemic stroke: functional outcomes at 12 months",
    "pub1.j": "Journal of Rehabilitation Medicine · Original Research",
    "pub2.t": "Ultrasound-guided regenerative injections in chronic musculoskeletal pain: a systematic review",
    "pub2.j": "European Journal of Physical & Rehabilitation Medicine · Review",
    "pub3.t": "Robotics and virtual reality in gait re-education: current evidence and clinical integration",
    "pub3.j": "Neurorehabilitation & Neural Repair · Review",
    "pub4.t": "Spasticity management after acquired brain injury: an individualized multimodal protocol",
    "pub4.j": "Archives of Physical Medicine and Rehabilitation · Clinical Study",
    "pub5.t": "Patient-reported outcomes in aesthetic rehabilitation: bridging function and confidence",
    "pub5.j": "Aesthetic Medicine Journal · Original Research",

    "media.label": "Media Appearances",
    "media.title": "In the Press & On Air",
    "media.sub": "Sharing medical knowledge with the wider public through television, podcasts and print.",
    "media.watch": "Watch ›",
    "media.listen": "Listen ›",
    "media.read": "Read ›",
    "media1.tag": "TV Interview",
    "media1.t": "“The New Era of Stroke Recovery”",
    "media1.d": "National morning show feature on modern neurorehabilitation and what patients should expect.",
    "media2.tag": "Podcast",
    "media2.t": "“Regenerative Medicine, Demystified”",
    "media2.d": "A 45-minute conversation on the evidence, the myths, and the future of biologic therapies.",
    "media3.tag": "Press Feature",
    "media3.t": "“Ageing Well: Movement as Medicine”",
    "media3.d": "Guest article in a leading health magazine on preserving function and independence with age.",

    "conf.label": "Conference Participation & Speaking",
    "conf.title": "Sharing Knowledge Worldwide",
    "conf.sub": "Invited lectures, workshops and scientific presentations at national and international meetings.",
    "conf1.m": "May",
    "conf1.t": "ESPRM Congress — European Society of PRM",
    "conf1.d": "Invited speaker · “Individualized neurorehabilitation pathways after stroke”",
    "conf1.loc": "Vienna, Austria",
    "conf2.m": "Oct",
    "conf2.t": "Panhellenic Congress of Physical & Rehabilitation Medicine",
    "conf2.d": "Session chair & lecturer · “Regenerative approaches in musculoskeletal rehabilitation”",
    "conf2.loc": "Athens, Greece",
    "conf3.m": "Mar",
    "conf3.t": "World Congress for NeuroRehabilitation (WCNR)",
    "conf3.d": "Oral presentation · “Technology-assisted gait re-education: 3-year clinic outcomes”",
    "conf3.loc": "Vancouver, Canada",
    "conf4.m": "Jun",
    "conf4.t": "ISPRM International Congress",
    "conf4.d": "Workshop faculty · “Ultrasound-guided interventions in the rehabilitation setting”",
    "conf4.loc": "Sydney, Australia",

    "social.label": "Social Media Profiles",
    "social.title": "Follow & Connect",
    "social.sub": "Health education, clinic news and research updates — follow along.",

    "contact.label": "Contact",
    "contact.title": "Book Your Appointment",
    "contact.sub": "Send a message and the clinic team will get back to you within one working day.",
    "form.name": "Full Name *",
    "form.namePh": "Your full name",
    "form.phone": "Phone",
    "form.phonePh": "+30 …",
    "form.email": "Email *",
    "form.emailPh": "you@example.com",
    "form.subject": "Reason for Visit",
    "form.opt1": "Neurorehabilitation",
    "form.opt2": "Aesthetic Rehabilitation",
    "form.opt3": "Regenerative Medicine",
    "form.opt4": "Second Opinion",
    "form.opt5": "Other",
    "form.message": "Message *",
    "form.messagePh": "Briefly describe how we can help…",
    "form.privacy": "Your information is confidential and used only to respond to your request.",
    "form.submit": "Send Message",
    "form.success": "Thank you! Your message has been received — we will contact you shortly.",
    "form.error": "Please fill in all required fields correctly.",

    "info.title": "Contact Information",
    "info.phone": "Phone",
    "info.email": "Email",
    "info.web": "Website",
    "info.addr": "Address",
    "info.addrV": "12 Skoufa Street, Kolonaki, Athens\n 45 Grigoriou Lampraki Avenue, Glyfada",
    "info.hours": "Opening Hours",
    "info.hoursV": "Mon – Fri: 09:00 – 20:00",
    "map.title": "Google Map",
    "map.note": "Interactive map will appear here.",
    "map.open": "Open in Google Maps",

    "footer.tag": "Neurorehabilitation · Aesthetic Rehabilitation · Regenerative Medicine",
    "footer.navTitle": "Navigate",
    "footer.contactTitle": "Contact",
    "footer.rights": "All rights reserved.",
    "footer.disclaimer": "Content on this website is for information only and does not replace medical advice."
  },

  el: {
    "meta.title": "Δρ. Νάσος Τσιβγούλης — Νευροαποκατάσταση · Αισθητική Αποκατάσταση · Αναγεννητική Ιατρική",

    "nav.about": "Σχετικά",
    "nav.services": "Υπηρεσίες",
    "nav.clinics": "Ιατρεία",
    "nav.publications": "Δημοσιεύσεις",
    "nav.media": "ΜΜΕ",
    "nav.conferences": "Συνέδρια",
    "nav.contact": "Επικοινωνία",
    "nav.book": "Κλείστε Ραντεβού",

    "hero.badge": "Ιατρική Νευρολογικής Αποκατάστασης",
    "hero.title1": "Αποκαθιστούμε τη Λειτουργικότητα.",
    "hero.title2": "Αναβαθμίζουμε τη Ζωή.",
    "hero.sub": "Σύγχρονη νευροαποκατάσταση, αισθητική αποκατάσταση και αναγεννητική ιατρική — εξατομικευμένα για εσάς.",
    "hero.cta1": "Κλείστε Ραντεβού",
    "hero.cta2": "Γνωρίστε την Προσέγγισή μας",
    "hero.stat1": "Χρόνια Εμπειρίας",
    "hero.stat2": "Ιδιωτικά Ιατρεία",
    "hero.stat3": "Επιστημονικές Δημοσιεύσεις",
    "hero.cardTitle": "Νευροαποκατάσταση",
    "hero.cardSub": "Αποκαθιστούμε τις πιο λεπτές συνδέσεις του σώματος",

    "pillar1.t": "Επιστημονική Τεκμηρίωση",
    "pillar1.d": "Ιατρική βασισμένη σε ενδείξεις",
    "pillar2.t": "Εξατομικευμένη Φροντίδα",
    "pillar2.d": "Προσαρμοσμένη στις δικές σας ανάγκες",
    "pillar3.t": "Καινοτόμες Θεραπείες",
    "pillar3.d": "Πρωτοποριακές αναγεννητικές λύσεις",
    "pillar4.t": "Ολιστική Ευεξία",
    "pillar4.d": "Σώμα, νους & λειτουργικότητα σε αρμονία",

    "about.label": "Σχετικά με τον Ιατρό",
    "about.title": "Δρ. Νάσος Τσιβγούλης",
    "about.photo": "Φωτογραφία ιατρού",
    "about.badge": "Ιατρική Νευρολογικής Αποκατάστασης",
    "about.p1": "Ο Δρ. Νάσος Τσιβγούλης είναι ιατρός με ισχυρά θεμέλια στην Ιατρική Νευρολογικής Αποκατάστασης, αφοσιωμένος στην αποκατάσταση της κίνησης, της αυτονομίας και της ποιότητας ζωής των ασθενών του.",
    "about.p2": "Συνδυάζοντας την τεκμηριωμένη νευροαποκατάσταση με την αισθητική αποκατάσταση και την αναγεννητική ιατρική, σχεδιάζει εξατομικευμένα θεραπευτικά προγράμματα που αντιμετωπίζουν τον άνθρωπο συνολικά — όχι μόνο την πάθηση. Η προσέγγισή του ενώνει την επιστημονική ακρίβεια με την ουσιαστική φροντίδα.",
    "about.h1": "Εξειδίκευση στη νευρολογική αποκατάσταση & τη λειτουργική ανάκτηση",
    "about.h2": "Προηγμένη εκπαίδευση στην αναγεννητική & μυοσκελετική ιατρική",
    "about.h3": "Ενεργός ερευνητής, συγγραφέας και διεθνής ομιλητής",
    "about.link": "Δείτε σπουδές & εκπαίδευση ›",

    "edu.label": "Ιατρική Εκπαίδευση & Κατάρτιση",
    "edu.title": "Θεμέλια Αριστείας",
    "edu.sub": "Ακαδημαϊκή πορεία και κλινική εκπαίδευση σε κορυφαία ιδρύματα.",
    "edu.i1t": "Πτυχίο Ιατρικής (MD)",
    "edu.i1d": "Ιατρική Σχολή, Εθνικό & Καποδιστριακό Πανεπιστήμιο Αθηνών.",
    "edu.i2t": "Ειδικότητα — Φυσική Ιατρική & Αποκατάσταση",
    "edu.i2d": "Εκπαίδευση στην ειδικότητα Φυσικής Ιατρικής & Αποκατάστασης, Πανεπιστημιακό Γενικό Νοσοκομείο, Αθήνα.",
    "edu.i3t": "Μετεκπαίδευση — Νευροαποκατάσταση",
    "edu.i3d": "Κλινική μετεκπαίδευση στη Νευρολογική Αποκατάσταση με έμφαση στην ανάρρωση μετά από εγκεφαλικό και νευροτραύμα.",
    "edu.i4t": "MSc — Αναγεννητική Ιατρική",
    "edu.i4d": "Μεταπτυχιακές σπουδές στην αναγεννητική και μυοσκελετική ιατρική, με άριστα.",
    "edu.i5t": "Συνεχής Πιστοποίηση & Εκπαιδευτικοί Ρόλοι",
    "edu.i5d": "Πιστοποίηση σε επεμβατικές πράξεις με υπερηχογραφική καθοδήγηση· προσκεκλημένος εκπαιδευτής σε ευρωπαϊκά σεμινάρια αποκατάστασης.",

    "svc.label": "Η Προσέγγισή μας",
    "svc.title": "Τομείς Εξειδίκευσης",
    "svc.sub": "Ολοκληρωμένα, εξατομικευμένα προγράμματα βασισμένα σε τρεις συμπληρωματικούς κλάδους.",
    "svc1.t": "Νευροαποκατάσταση",
    "svc1.d": "Αποκατάσταση κίνησης, αυτονομίας και ποιότητας ζωής μετά από εγκεφαλικό, κρανιοεγκεφαλική κάκωση ή κάκωση νωτιαίου μυελού.",
    "svc2.t": "Αισθητική Αποκατάσταση",
    "svc2.d": "Ανάδειξη της φυσικής ομορφιάς και λειτουργικότητας με ιατρική ακρίβεια και συντηρητική φιλοσοφία.",
    "svc3.t": "Αναγεννητική Ιατρική",
    "svc3.d": "Προαγωγή της ίασης και της μακροζωίας μέσω προηγμένων, ελάχιστα επεμβατικών βιολογικών θεραπειών.",
    "svc4.t": "Ολιστική Προσέγγιση",
    "svc4.d": "Αντιμετώπιση της ρίζας του προβλήματος για ουσιαστικά, διαρκή αποτελέσματα στην υγεία και την καθημερινότητα.",

    "quote.text": "Ακρίβεια στην επιστήμη. Φροντίδα με ενσυναίσθηση. Αριστεία στα αποτελέσματα.",

    "clinics.label": "Ιατρεία",
    "clinics.title": "Πού θα μας Βρείτε",
    "clinics.sub": "Δύο σύγχρονα ιδιωτικά ιατρεία, σχεδιασμένα γύρω από την άνεση του ασθενούς και την κλινική αριστεία.",
    "clinics.book": "Ραντεβού στο ιατρείο ›",
    "clinic1.name": "Αθήνα — Ιατρείο Κολωνακίου",
    "clinic1.addr": "Σκουφά 12, Κολωνάκι, 106 73 Αθήνα",
    "clinic1.hours": "Δευ – Παρ: 09:00 – 20:00 · Σάβ: κατόπιν ραντεβού",
    "clinic2.name": "Γλυφάδα — Παραλιακό Ιατρείο",
    "clinic2.addr": "Λεωφ. Γρηγορίου Λαμπράκη 45, 166 74 Γλυφάδα",
    "clinic2.hours": "Τρί & Πέμ: 10:00 – 19:00 · Σάβ: 10:00 – 14:00",

    "pubs.label": "Δημοσιεύσεις",
    "pubs.title": "Επιλεγμένο Επιστημονικό Έργο",
    "pubs.sub": "Έρευνα με κριτές που συμβάλλει στην εξέλιξη της ιατρικής αποκατάστασης.",
    "pubs.view": "Προβολή",
    "pubs.note": "Πλήρης λίστα δημοσιεύσεων διαθέσιμη κατόπιν αιτήματος ή μέσω των ακαδημαϊκών προφίλ.",
    "pub1.t": "Πρώιμη εντατική νευροαποκατάσταση μετά από ισχαιμικό εγκεφαλικό: λειτουργικά αποτελέσματα στους 12 μήνες",
    "pub1.j": "Journal of Rehabilitation Medicine · Πρωτότυπη Έρευνα",
    "pub2.t": "Αναγεννητικές εγχύσεις με υπερηχογραφική καθοδήγηση στον χρόνιο μυοσκελετικό πόνο: συστηματική ανασκόπηση",
    "pub2.j": "European Journal of Physical & Rehabilitation Medicine · Ανασκόπηση",
    "pub3.t": "Ρομποτική και εικονική πραγματικότητα στην επανεκπαίδευση βάδισης: σύγχρονα δεδομένα και κλινική ένταξη",
    "pub3.j": "Neurorehabilitation & Neural Repair · Ανασκόπηση",
    "pub4.t": "Διαχείριση σπαστικότητας μετά από επίκτητη εγκεφαλική βλάβη: εξατομικευμένο πολυπαραγοντικό πρωτόκολλο",
    "pub4.j": "Archives of Physical Medicine and Rehabilitation · Κλινική Μελέτη",
    "pub5.t": "Αποτελέσματα αναφερόμενα από ασθενείς στην αισθητική αποκατάσταση: γέφυρα λειτουργικότητας και αυτοπεποίθησης",
    "pub5.j": "Aesthetic Medicine Journal · Πρωτότυπη Έρευνα",

    "media.label": "Εμφανίσεις στα ΜΜΕ",
    "media.title": "Στον Τύπο & στον Αέρα",
    "media.sub": "Μετάδοση ιατρικής γνώσης στο ευρύ κοινό μέσα από τηλεόραση, podcast και έντυπα.",
    "media.watch": "Δείτε ›",
    "media.listen": "Ακούστε ›",
    "media.read": "Διαβάστε ›",
    "media1.tag": "Τηλεοπτική Συνέντευξη",
    "media1.t": "«Η Νέα Εποχή της Αποκατάστασης μετά το Εγκεφαλικό»",
    "media1.d": "Αφιέρωμα σε πρωινή εκπομπή πανελλαδικής εμβέλειας για τη σύγχρονη νευροαποκατάσταση και τι να περιμένουν οι ασθενείς.",
    "media2.tag": "Podcast",
    "media2.t": "«Αναγεννητική Ιατρική, Χωρίς Μύθους»",
    "media2.d": "Μια 45λεπτη συζήτηση για τα δεδομένα, τους μύθους και το μέλλον των βιολογικών θεραπειών.",
    "media3.tag": "Δημοσίευμα",
    "media3.t": "«Γερνώντας Καλά: Η Κίνηση ως Φάρμακο»",
    "media3.d": "Άρθρο σε κορυφαίο περιοδικό υγείας για τη διατήρηση λειτουργικότητας και αυτονομίας με την πάροδο της ηλικίας.",

    "conf.label": "Συμμετοχή σε Συνέδρια & Ομιλίες",
    "conf.title": "Μοιραζόμαστε τη Γνώση Παγκοσμίως",
    "conf.sub": "Προσκεκλημένες διαλέξεις, workshops και επιστημονικές παρουσιάσεις σε εθνικά και διεθνή συνέδρια.",
    "conf1.m": "Μάι",
    "conf1.t": "Συνέδριο ESPRM — Ευρωπαϊκή Εταιρεία ΦΙΑπ",
    "conf1.d": "Προσκεκλημένος ομιλητής · «Εξατομικευμένες διαδρομές νευροαποκατάστασης μετά το εγκεφαλικό»",
    "conf1.loc": "Βιέννη, Αυστρία",
    "conf2.m": "Οκτ",
    "conf2.t": "Πανελλήνιο Συνέδριο Φυσικής Ιατρικής & Αποκατάστασης",
    "conf2.d": "Πρόεδρος συνεδρίας & εισηγητής · «Αναγεννητικές προσεγγίσεις στη μυοσκελετική αποκατάσταση»",
    "conf2.loc": "Αθήνα, Ελλάδα",
    "conf3.m": "Μάρ",
    "conf3.t": "Παγκόσμιο Συνέδριο Νευροαποκατάστασης (WCNR)",
    "conf3.d": "Προφορική ανακοίνωση · «Τεχνολογικά υποβοηθούμενη επανεκπαίδευση βάδισης: αποτελέσματα 3ετίας»",
    "conf3.loc": "Βανκούβερ, Καναδάς",
    "conf4.m": "Ιούν",
    "conf4.t": "Διεθνές Συνέδριο ISPRM",
    "conf4.d": "Εκπαιδευτής workshop · «Επεμβατικές πράξεις με υπερηχογραφική καθοδήγηση στην αποκατάσταση»",
    "conf4.loc": "Σίδνεϊ, Αυστραλία",

    "social.label": "Προφίλ στα Μέσα Κοινωνικής Δικτύωσης",
    "social.title": "Ακολουθήστε & Συνδεθείτε",
    "social.sub": "Εκπαιδευτικό περιεχόμενο υγείας, νέα του ιατρείου και ερευνητικές ενημερώσεις.",

    "contact.label": "Επικοινωνία",
    "contact.title": "Κλείστε το Ραντεβού σας",
    "contact.sub": "Στείλτε μήνυμα και η ομάδα του ιατρείου θα επικοινωνήσει μαζί σας εντός μίας εργάσιμης ημέρας.",
    "form.name": "Ονοματεπώνυμο *",
    "form.namePh": "Το ονοματεπώνυμό σας",
    "form.phone": "Τηλέφωνο",
    "form.phonePh": "+30 …",
    "form.email": "Email *",
    "form.emailPh": "you@example.com",
    "form.subject": "Λόγος Επίσκεψης",
    "form.opt1": "Νευροαποκατάσταση",
    "form.opt2": "Αισθητική Αποκατάσταση",
    "form.opt3": "Αναγεννητική Ιατρική",
    "form.opt4": "Δεύτερη Γνώμη",
    "form.opt5": "Άλλο",
    "form.message": "Μήνυμα *",
    "form.messagePh": "Περιγράψτε σύντομα πώς μπορούμε να βοηθήσουμε…",
    "form.privacy": "Τα στοιχεία σας είναι εμπιστευτικά και χρησιμοποιούνται μόνο για την απάντηση στο αίτημά σας.",
    "form.submit": "Αποστολή Μηνύματος",
    "form.success": "Ευχαριστούμε! Το μήνυμά σας ελήφθη — θα επικοινωνήσουμε σύντομα μαζί σας.",
    "form.error": "Παρακαλούμε συμπληρώστε σωστά όλα τα υποχρεωτικά πεδία.",

    "info.title": "Στοιχεία Επικοινωνίας",
    "info.phone": "Τηλέφωνο",
    "info.email": "Email",
    "info.web": "Ιστότοπος",
    "info.addr": "Διεύθυνση",
    "info.addrV": "Σκουφά 12, Κολωνάκι, Αθήνα\nΛεωφ. Γρηγορίου Λαμπράκη 45, Γλυφάδα",
    "info.hours": "Ωράριο Λειτουργίας",
    "info.hoursV": "Δευ – Παρ: 09:00 – 20:00",
    "map.title": "Χάρτης Google",
    "map.note": "Εδώ θα εμφανίζεται ο διαδραστικός χάρτης.",
    "map.open": "Άνοιγμα στους Χάρτες Google",

    "footer.tag": "Νευροαποκατάσταση · Αισθητική Αποκατάσταση · Αναγεννητική Ιατρική",
    "footer.navTitle": "Πλοήγηση",
    "footer.contactTitle": "Επικοινωνία",
    "footer.rights": "Με επιφύλαξη παντός δικαιώματος.",
    "footer.disclaimer": "Το περιεχόμενο του ιστότοπου είναι μόνο ενημερωτικό και δεν υποκαθιστά την ιατρική συμβουλή."
  }
};

/* ------------------------------------------------------------
   Language switching
   ------------------------------------------------------------ */
const LANG_KEY = "drnasos-lang";
let currentLang = localStorage.getItem(LANG_KEY) || "el";

function applyLanguage(lang) {
  const dict = I18N[lang];
  if (!dict) return;
  currentLang = lang;
  localStorage.setItem(LANG_KEY, lang);
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] === undefined) return;
    // Keys ending in a trailing "›" arrow are stored with the arrow;
    // links keep their decorative span, so rebuild those safely.
    if (el.querySelector("span[aria-hidden]")) {
      el.innerHTML = "";
      el.append(dict[key].replace(/\s*›\s*$/, " "));
      const arrow = document.createElement("span");
      arrow.setAttribute("aria-hidden", "true");
      arrow.textContent = "›";
      el.append(arrow);
    } else {
      el.textContent = dict[key];
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (dict[key] !== undefined) el.setAttribute("placeholder", dict[key]);
  });

  document.title = dict["meta.title"];

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    const active = btn.dataset.lang === lang;
    btn.classList.toggle("active", active);
    btn.setAttribute("aria-pressed", String(active));
  });
}

document.querySelectorAll(".lang-btn").forEach((btn) => {
  btn.addEventListener("click", () => applyLanguage(btn.dataset.lang));
});

if (currentLang !== "en") applyLanguage(currentLang);

/* ------------------------------------------------------------
   Header: shrink on scroll + active nav highlighting
   ------------------------------------------------------------ */
const header = document.getElementById("siteHeader");
const backToTop = document.getElementById("backToTop");

function onScroll() {
  const y = window.scrollY;
  header.classList.toggle("scrolled", y > 30);
  backToTop.classList.toggle("visible", y > 600);
}
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Highlight the nav link of the section in view
const navLinks = [...document.querySelectorAll(".main-nav .nav-link")];
const sectionsById = navLinks
  .map((l) => document.querySelector(l.getAttribute("href")))
  .filter(Boolean);

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((l) =>
        l.classList.toggle("active", l.getAttribute("href") === `#${entry.target.id}`)
      );
    });
  },
  { rootMargin: "-40% 0px -55% 0px" }
);
sectionsById.forEach((s) => sectionObserver.observe(s));

/* ------------------------------------------------------------
   Mobile navigation
   ------------------------------------------------------------ */
const navToggle = document.getElementById("navToggle");
const mainNav = document.getElementById("mainNav");

function closeNav() {
  mainNav.classList.remove("open");
  navToggle.classList.remove("open");
  navToggle.setAttribute("aria-expanded", "false");
}

navToggle.addEventListener("click", () => {
  const open = mainNav.classList.toggle("open");
  navToggle.classList.toggle("open", open);
  navToggle.setAttribute("aria-expanded", String(open));
});

mainNav.querySelectorAll("a").forEach((a) => a.addEventListener("click", closeNav));
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeNav();
});

/* ------------------------------------------------------------
   Scroll-reveal animations
   ------------------------------------------------------------ */
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
);
document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

/* ------------------------------------------------------------
   Contact form (front-end only — wire to your backend/email
   service such as Formspree or EmailJS when ready)
   ------------------------------------------------------------ */
const form = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const dict = I18N[currentLang];
  let valid = true;

  form.querySelectorAll("[required]").forEach((field) => {
    const emptyOk = field.value.trim() !== "";
    const emailOk =
      field.type !== "email" || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value.trim());
    const ok = emptyOk && emailOk;
    field.classList.toggle("invalid", !ok);
    if (!ok) valid = false;
  });

  formStatus.classList.remove("success", "error");
  if (!valid) {
    formStatus.textContent = dict["form.error"];
    formStatus.classList.add("error");
    return;
  }

  formStatus.textContent = dict["form.success"];
  formStatus.classList.add("success");
  form.reset();
});

form.querySelectorAll("input, textarea").forEach((field) => {
  field.addEventListener("input", () => field.classList.remove("invalid"));
});

/* ------------------------------------------------------------
   Footer year
   ------------------------------------------------------------ */
document.getElementById("year").textContent = new Date().getFullYear();
