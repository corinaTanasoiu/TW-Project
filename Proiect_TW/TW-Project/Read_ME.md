Structură entități

Proiect:
Atribute: id, nume, descriere, repository, echipa.

Bug:
Atribute: id, descriere, prioritate, severitate, status, commit_link, proiect_id.

Utilizator:
Atribute: id, nume, email, rol (MP sau TST).

Operații RESTful

Proiecte:
GET /api/proiecte - Listare proiecte.
POST /api/proiecte - Creare proiect.
PUT /api/proiecte/:id - Actualizare proiect.
DELETE /api/proiecte/:id - Ștergere proiect.

Bug-uri:
GET /api/buguri/:proiect_id - Listare bug-uri pentru un proiect.
POST /api/buguri - Adăugare bug.
PUT /api/buguri/:id - Actualizare bug.
Autentificare:
POST /api/auth/login - Autentificare utilizator.


Aplicație pentru gestionarea bug-urilor
Aplicația este destinată echipelor de dezvoltare software pentru a îmbunătăți procesul de gestionare a bug-urilor și pentru a asigura o mai bună 
colaborare între membri. Platforma permite:

Adăugarea și actualizarea proiectelor.
Raportarea bug-urilor cu detalii complete (severitate, prioritate, commit link).
Gestionarea status-ului bug-urilor de către membrii proiectului.


1. models/
Acest director conține definițiile entităților și schema bazei de date (folosind un ORM precum Sequelize pentru PostgreSQL sau Mongoose pentru MongoDB).

Project.js - Model pentru entitatea "Proiect".
Bug.js - Model pentru entitatea "Bug".
User.js - Model pentru entitatea "Utilizator".

2. controllers/
Conține logica de business pentru manipularea datelor. Controller-ele procesează cererile primite de la rutare și interacționează cu modelele.

projectController.js - Controler pentru operațiile pe proiecte.
bugController.js - Controler pentru operațiile pe bug-uri.
authController.js - Controler pentru autentificare.

3. routes/
Conține definițiile pentru endpoint-urile REST API. Rutarea conectează cererile HTTP cu controller-ele corespunzătoare.

projectRoutes.js - Rute pentru gestionarea proiectelor.
bugRoutes.js - Rute pentru gestionarea bug-urilor.
authRoutes.js - Rute pentru autentificare.

4. config/
Conține fișiere de configurare, cum ar fi setările pentru baza de date, setările pentru autentificare sau alte configurări generale.

database.js - Configurația conexiunii la baza de date.
config.js - Configurații generale (de exemplu, chei secrete)

5. middleware/
Conține middleware-uri personalizate, care sunt funcții executate între cerere și răspuns. De exemplu, verificarea autentificării sau gestionarea erorilor.


authMiddleware.js - Middleware pentru autentificare.
errorHandler.js - Middleware pentru gestionarea erorilor.
