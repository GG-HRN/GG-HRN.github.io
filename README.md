# 🌟 Free PWA Productivity Suite

This repository contains three free, offline-capable Progressive Web Apps (PWAs) to help you manage tasks, workouts, and stock. All apps are mobile-friendly, installable on the home screen, and work offline.

⸻

📝 1. To-Do List

Purpose: Simple task management app.

Features:
	•	Create, edit, delete tasks.
	•	Tasks saved locally in JSON (IndexedDB).
	•	Tasks displayed in card view.
	•	Search/filter tasks.
	•	Fully responsive for mobile and desktop.
	•	Installable as a PWA for offline use.

Folder: todo-list
Main file: index.html

Screenshot:

🏋️ 2. Workout Planner

Purpose: Plan weekly workouts and track exercises.

Features:
	•	Create multiple routines.
	•	Add exercises with sets, reps, and weight.
	•	Inline search and autocomplete for exercises.
	•	Weekly calendar view for exercises.
	•	Save routines in local JSON.
	•	Installable as a PWA for offline use.

Folder: workout-planner
Main file: index.html (routine selection)
Planner file: planner.html (weekly view)

Screenshot:

🏪 3. Stock Manager

Purpose: Manage products, categories, brands, and stock quantities with advanced tracking.

Features:
	•	Create stores with name and description.
	•	Add products with:
	•	Price, Cost
	•	Brand, Category, Subcategory
	•	Optional: Warranty (serial + warranty date)
	•	Optional: Expiration + Lot Number
	•	Duplication logic for accurate quantity management:
	•	Warranty → always new entry, quantity = 1
	•	Lot → add quantity only if all fields match
	•	Normal products → add quantity only if all fields match
	•	Responsive cards layout for products.
	•	Search, filter, pagination.
	•	Installable as a PWA for offline use.

Folder: stock-manager
Main file: index.html (store selection)
Dashboard file: dashboard.html
Products file: products.html

Screenshot:

📱 How to Install PWAs on Your Device

On iPhone (Safari)
	1.	Open the app in Safari.
	2.	Tap the Share button (square with arrow).
	3.	Select Add to Home Screen.
	4.	Confirm the name and tap Add.
	5.	App will now open like a native app and work offline.

On Android (Chrome/Edge/Brave)
	1.	Open the app in Chrome/Edge/Brave.
	2.	Tap the menu (three dots).
	3.	Select Add to Home Screen.
	4.	Confirm the name and tap Add.
	5.	App will now behave like a native app with offline support.

Screenshot placeholders:
	•	iPhone Share menu → 
 	•	Android Add to Home → 

⚙️ Technologies Used
	•	HTML, CSS, JavaScript
	•	IndexedDB for offline storage
	•	Service Workers for PWA offline support
	•	Responsive design for mobile and desktop

⸻

🚀 How to Use
	1.	Clone the repository:
  2.	Open any app folder in a browser (Safari on iPhone, Chrome/Edge/Brave on desktop).
	3.	Add the app to your home screen to use offline.
	4.	Start creating tasks, routines, or stores/products.

⸻

🌱 Future Plans
	•	Stock Manager expansion:
	•	Components management (for production/assembly)
	•	Sales module
	•	Advanced reporting
	•	More free mini PWAs for productivity and education.
	•	Optional cloud sync for backup.

⸻

📄 License

Open-source and free for everyone.
  
