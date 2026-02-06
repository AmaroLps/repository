// // 
// 'use client'

// import React, { useState } from "react";
// import {
//   Smartphone,
//   Users,
//   Car,
//   FileText,
//   MapPin,
//   Camera,
//   MessageSquare,
//   Bell,
//   CheckCircle,
//   Clock,
//   AlertTriangle,
//   ChevronRight,
//   Settings,
//   Shield,
//   Database,
//   Cloud,
//   Calendar,
//   TrendingUp,
// } from "lucide-react";

// // Componente Principal
// function PresentacionMVP() {
//   const [activeTab, setActiveTab] = useState("resumen");

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
//       {/* Header */}
//       <header className="bg-white shadow-lg">
//         <div className="max-w-7xl mx-auto px-4 py-6">
//           <h1 className="text-4xl font-bold text-gray-900 flex items-center gap-3">
//             <Smartphone className="text-blue-600" size={40} />
//             MVP - Sistema de Gestión de Incidencias Vehiculares
//           </h1>
//           <p className="text-gray-600 mt-2">
//             Presentación Técnica del Proyecto
//           </p>
//         </div>
//       </header>

//       {/* Navegación por Tabs */}
//       <nav className="bg-white shadow-sm sticky top-0 z-10">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="flex space-x-1 overflow-x-auto">
//             {[
//               { id: "resumen", label: "Resumen", icon: FileText },
//               { id: "timeline", label: "Timeline", icon: Clock },
//               { id: "roles", label: "Roles", icon: Users },
//               { id: "flujos", label: "Flujos", icon: ChevronRight },
//               { id: "arquitectura", label: "Arquitectura", icon: Database },
//               { id: "stack", label: "Stack", icon: Cloud },
//               { id: "estimacion", label: "Estimación", icon: Calendar },
//               { id: "comparativa", label: "Comparativa", icon: CheckCircle },
//             ].map((tab) => {
//               const Icon = tab.icon;
//               return (
//                 <button
//                   key={tab.id}
//                   onClick={() => setActiveTab(tab.id)}
//                   className={`flex items-center gap-2 px-6 py-4 font-medium transition-all ${
//                     activeTab === tab.id
//                       ? "border-b-4 border-blue-600 text-blue-600"
//                       : "text-gray-600 hover:text-gray-900"
//                   }`}
//                 >
//                   <Icon size={20} />
//                   {tab.label}
//                 </button>
//               );
//             })}
//           </div>
//         </div>
//       </nav>

//       {/* Contenido */}
//       <main className="max-w-7xl mx-auto px-4 py-8">
//         {activeTab === "resumen" && <ResumenTab />}
//         {activeTab === "timeline" && <TimelineTab />}
//         {activeTab === "roles" && <RolesTab />}
//         {activeTab === "flujos" && <FlujosTab />}
//         {activeTab === "arquitectura" && <ArquitecturaTab />}
//         {activeTab === "stack" && <StackTab />}
//         {activeTab === "estimacion" && <EstimacionTab />}
//         {activeTab === "comparativa" && <ComparativaTab />}
//       </main>
//     </div>
//   );
// }

// // Tab: Resumen
// function ResumenTab() {
//   return (
//     <div className="space-y-6 animate-fade-in">
//       <div className="bg-white rounded-xl shadow-lg p-8">
//         <h2 className="text-3xl font-bold text-gray-900 mb-4">
//           📋 Resumen Ejecutivo
//         </h2>
//         <div className="prose max-w-none">
//           <p className="text-lg text-gray-700 mb-4">
//             Aplicación móvil desarrollada en{" "}
//             <strong>Expo (React Native)</strong> para la gestión integral de
//             incidencias vehiculares con dos roles principales:{" "}
//             <strong>Cliente</strong> y <strong>Operario</strong>.
//           </p>

//           <div className="grid md:grid-cols-2 gap-6 mt-6">
//             <div className="bg-blue-50 p-6 rounded-lg">
//               <h3 className="text-xl font-semibold text-blue-900 mb-3 flex items-center gap-2">
//                 <Users size={24} />
//                 Actores del Sistema
//               </h3>
//               <ul className="space-y-2 text-gray-700">
//                 <li>
//                   <strong>Cliente:</strong> Reporta y da seguimiento a
//                   incidencias
//                 </li>
//                 <li>
//                   <strong>Operario:</strong> Atiende y resuelve incidencias
//                 </li>
//               </ul>
//             </div>

//             <div className="bg-green-50 p-6 rounded-lg">
//               <h3 className="text-xl font-semibold text-green-900 mb-3 flex items-center gap-2">
//                 <CheckCircle size={24} />
//                 Características Clave
//               </h3>
//               <ul className="space-y-2 text-gray-700">
//                 <li>✅ Múltiples vehículos y pólizas</li>
//                 <li>✅ Geolocalización GPS</li>
//                 <li>✅ Notificaciones Push (FCM)</li>
//                 <li>✅ Timeline de estados</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="grid md:grid-cols-3 gap-6">
//         <StatCard
//           title="Estimación Total"
//           value="10-14 semanas"
//           subtitle="Con 1 desarrollador"
//           icon={Clock}
//           color="blue"
//         />
//         <StatCard
//           title="Pantallas Cliente"
//           value="12-15"
//           subtitle="Pantallas principales"
//           icon={Smartphone}
//           color="green"
//         />
//         <StatCard
//           title="Pantallas Operario"
//           value="8-10"
//           subtitle="Pantallas principales"
//           icon={Users}
//           color="purple"
//         />
//       </div>
//     </div>
//   );
// }

// // Tab: Timeline
// function TimelineTab() {
//   const fases = [
//     {
//       fase: "Setup Inicial",
//       duracion: "1-2 días",
//       items: [
//         "Configuración Expo",
//         "Estructura de carpetas",
//         "Firebase setup",
//         "Navegación base",
//       ],
//       color: "blue",
//     },
//     {
//       fase: "Autenticación y Roles",
//       duracion: "2-3 días",
//       items: [
//         "Login/Registro",
//         "Firebase Auth",
//         "Sistema de roles",
//         "Guards de navegación",
//       ],
//       color: "green",
//     },
//     {
//       fase: "Frontend Cliente",
//       duracion: "27-36 días",
//       items: [
//         "Perfil y gestión",
//         "Vehículos y pólizas",
//         "Registro de incidencia",
//         "Lista y detalles",
//       ],
//       color: "purple",
//     },
//     {
//       fase: "Frontend Operario",
//       duracion: "26-35 días",
//       items: [
//         "Dashboard 3 tabs",
//         "Pool de incidencias",
//         "Gestión de estados",
//         "Comentarios y mapas",
//       ],
//       color: "orange",
//     },
//     {
//       fase: "Integración",
//       duracion: "14-21 días",
//       items: [
//         "Componentes compartidos",
//         "Notificaciones FCM",
//         "Testing E2E",
//         "Optimización",
//       ],
//       color: "red",
//     },
//   ];

//   return (
//     <div className="space-y-6 animate-fade-in">
//       <div className="bg-white rounded-xl shadow-lg p-8">
//         <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
//           <Clock size={32} />
//           Timeline del Proyecto
//         </h2>

//         <div className="relative">
//           <div className="absolute left-8 top-0 bottom-0 w-1 bg-gray-200"></div>

//           <div className="space-y-8">
//             {fases.map((fase, index) => (
//               <div key={index} className="relative pl-20">
//                 <div
//                   className={`absolute left-4 w-9 h-9 rounded-full bg-${fase.color}-500 flex items-center justify-center text-white font-bold shadow-lg`}
//                 >
//                   {index + 1}
//                 </div>

//                 <div
//                   className={`bg-${fase.color}-50 rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow`}
//                 >
//                   <div className="flex items-center justify-between mb-3">
//                     <h3 className="text-xl font-bold text-gray-900">
//                       {fase.fase}
//                     </h3>
//                     <span
//                       className={`px-4 py-1 rounded-full bg-${fase.color}-200 text-${fase.color}-800 font-semibold text-sm`}
//                     >
//                       {fase.duracion}
//                     </span>
//                   </div>
//                   <ul className="space-y-2">
//                     {fase.items.map((item, i) => (
//                       <li
//                         key={i}
//                         className="flex items-center gap-2 text-gray-700"
//                       >
//                         <ChevronRight
//                           size={16}
//                           className={`text-${fase.color}-600`}
//                         />
//                         {item}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// // Tab: Roles
// function RolesTab() {
//   return (
//     <div className="space-y-6 animate-fade-in">
//       <div className="grid md:grid-cols-2 gap-6">
//         {/* Cliente */}
//         <div className="bg-white rounded-xl shadow-lg p-8">
//           <div className="flex items-center gap-3 mb-6">
//             <div className="bg-blue-100 p-3 rounded-full">
//               <Users className="text-blue-600" size={32} />
//             </div>
//             <div>
//               <h3 className="text-2xl font-bold text-gray-900">Cliente</h3>
//               <p className="text-gray-600">Usuario que reporta incidencias</p>
//             </div>
//           </div>

//           <div className="space-y-4">
//             <Section title="Puede hacer:" icon={CheckCircle}>
//               <ul className="space-y-2 text-gray-700">
//                 <li>✅ Registrar incidencias vehiculares</li>
//                 <li>✅ Gestionar múltiples vehículos y pólizas</li>
//                 <li>✅ Ver estado de sus incidencias en tiempo real</li>
//                 <li>✅ Recibir notificaciones de actualizaciones</li>
//                 <li>✅ Cancelar incidencias (con justificación)</li>
//                 <li>✅ Ver historial completo</li>
//               </ul>
//             </Section>

//             <Section title="No puede hacer:" icon={AlertTriangle}>
//               <ul className="space-y-2 text-gray-700">
//                 <li>❌ Ver incidencias de otros clientes</li>
//                 <li>❌ Cambiar estados (excepto cancelar)</li>
//                 <li>❌ Asignarse operarios</li>
//               </ul>
//             </Section>
//           </div>
//         </div>

//         {/* Operario */}
//         <div className="bg-white rounded-xl shadow-lg p-8">
//           <div className="flex items-center gap-3 mb-6">
//             <div className="bg-green-100 p-3 rounded-full">
//               <Shield className="text-green-600" size={32} />
//             </div>
//             <div>
//               <h3 className="text-2xl font-bold text-gray-900">Operario</h3>
//               <p className="text-gray-600">Personal que atiende incidencias</p>
//             </div>
//           </div>

//           <div className="space-y-4">
//             <Section title="Puede hacer:" icon={CheckCircle}>
//               <ul className="space-y-2 text-gray-700">
//                 <li>✅ Ver pool de incidencias disponibles</li>
//                 <li>✅ Tomar/asignarse incidencias</li>
//                 <li>✅ Cambiar estados de incidencias</li>
//                 <li>✅ Agregar comentarios y actualizaciones</li>
//                 <li>✅ Ver datos completos del cliente</li>
//                 <li>✅ Marcar incidencias como resueltas</li>
//                 <li>✅ Ver mapa con todas sus incidencias activas</li>
//               </ul>
//             </Section>

//             <Section title="No puede hacer:" icon={AlertTriangle}>
//               <ul className="space-y-2 text-gray-700">
//                 <li>❌ Editar datos del cliente</li>
//                 <li>❌ Eliminar incidencias</li>
//                 <li>❌ Crear incidencias</li>
//               </ul>
//             </Section>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// // Tab: Flujos
// function FlujosTab() {
//   const [selectedFlow, setSelectedFlow] = useState<string>("");

//   const flujos: any = {
//     cliente_registra: {
//       title: "Cliente Registra Incidencia",
//       color: "blue",
//       steps: [
//         { icon: Smartphone, text: "Cliente abre la app y hace login" },
//         { icon: Car, text: "Selecciona vehículo (si tiene múltiples)" },
//         { icon: MapPin, text: "Confirma ubicación GPS automática" },
//         { icon: Camera, text: "Toma fotos de evidencia (min 2)" },
//         { icon: FileText, text: "Escribe descripción detallada" },
//         { icon: Users, text: "[Opcional] Agrega datos de terceros" },
//         { icon: CheckCircle, text: "Revisa resumen y confirma" },
//         { icon: Cloud, text: "App sube fotos con barra de progreso" },
//         { icon: Bell, text: 'Incidencia creada - Estado: "Registrada"' },
//         { icon: Smartphone, text: "Cliente recibe confirmación" },
//       ],
//     },
//     gestion_vehiculos: {
//       title: "Gestión de Vehículos y Pólizas",
//       color: "purple",
//       steps: [
//         { icon: Car, text: "Cliente va a Perfil > Mis Vehículos" },
//         { icon: CheckCircle, text: "Ve lista de vehículos registrados" },
//         { icon: FileText, text: "Tap en (+) para agregar nuevo vehículo" },
//         { icon: Camera, text: "Completa datos: placa, marca, modelo, año" },
//         { icon: Shield, text: "Asocia póliza al vehículo" },
//         { icon: Cloud, text: "Sube documento de póliza (PDF)" },
//         { icon: CheckCircle, text: "Sistema valida vigencia de póliza" },
//         { icon: Bell, text: "Recibe alertas antes de vencimiento" },
//       ],
//     },
//     operario_atiende: {
//       title: "Operario Atiende Incidencia",
//       color: "green",
//       steps: [
//         { icon: Smartphone, text: "Operario abre Dashboard" },
//         {
//           icon: AlertTriangle,
//           text: 'Tab "Disponibles" > Ve pool de incidencias',
//         },
//         { icon: MapPin, text: "Selecciona incidencia cercana" },
//         {
//           icon: FileText,
//           text: "Revisa detalle completo (cliente, fotos, ubicación)",
//         },
//         { icon: CheckCircle, text: 'Tap "Tomar incidencia" > Confirmación' },
//         {
//           icon: Bell,
//           text: 'Estado → "Asignada" (cliente recibe notificación)',
//         },
//         { icon: Clock, text: 'Tap "Iniciar atención" → Estado: "En atención"' },
//         { icon: MessageSquare, text: "Agrega comentarios y fotos de progreso" },
//         {
//           icon: Bell,
//           text: "Cliente recibe notificaciones de actualizaciones",
//         },
//         { icon: CheckCircle, text: 'Tap "Marcar como resuelta"' },
//         { icon: FileText, text: "Llena formulario de cierre + fotos finales" },
//         { icon: CheckCircle, text: 'Estado → "Resuelta" (cliente notificado)' },
//       ],
//     },
//   };

//   return (
//     <div className="space-y-6 animate-fade-in">
//       <div className="bg-white rounded-xl shadow-lg p-8">
//         <h2 className="text-3xl font-bold text-gray-900 mb-6">
//           🔄 Flujos Principales
//         </h2>

//         <div className="grid md:grid-cols-3 gap-4 mb-8">
//           {Object.entries(flujos).map(([key, flow]: [string, any]) => (
//             <button
//               key={key}
//               onClick={() => setSelectedFlow(key)}
//               className={`p-6 rounded-lg border-2 transition-all hover:shadow-lg ${
//                 selectedFlow === key
//                   ? `border-${flow.color}-500 bg-${flow.color}-50`
//                   : "border-gray-200 hover:border-gray-300"
//               }`}
//             >
//               <h3 className="font-bold text-lg text-gray-900">{flow.title}</h3>
//             </button>
//           ))}
//         </div>

//         {selectedFlow && (
//           <div className="animate-fade-in">
//             <h3 className="text-2xl font-bold text-gray-900 mb-6">
//               {flujos[selectedFlow].title}
//             </h3>
//             <div className="relative">
//               <div className="absolute left-6 top-0 bottom-0 w-1 bg-gray-200"></div>

//               <div className="space-y-4">
//                 {flujos[selectedFlow].steps.map((step: any, index: number) => {
//                   const StepIcon = step.icon;
//                   return (
//                     <div
//                       key={index}
//                       className="relative pl-16 flex items-start gap-4"
//                     >
//                       <div
//                         className={`absolute left-2 w-9 h-9 rounded-full bg-${flujos[selectedFlow].color}-500 flex items-center justify-center shadow-lg z-10`}
//                       >
//                         <StepIcon className="text-white" size={20} />
//                       </div>
//                       <div className="flex-1 bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
//                         <p className="text-gray-900 font-medium">{step.text}</p>
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//           </div>
//         )}

//         {!selectedFlow && (
//           <div className="text-center text-gray-500 py-12">
//             <ChevronRight size={48} className="mx-auto mb-4 opacity-50" />
//             <p>Selecciona un flujo para ver el detalle paso a paso</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// // Tab: Arquitectura
// function ArquitecturaTab() {
//   return (
//     <div className="space-y-6 animate-fade-in">
//       <div className="bg-white rounded-xl shadow-lg p-8">
//         <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
//           <Database size={32} />
//           Arquitectura de la Aplicación
//         </h2>

//         <div className="space-y-8">
//           <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8">
//             <div className="flex flex-col items-center space-y-6">
//               <div className="w-full max-w-2xl">
//                 <h3 className="text-center font-bold text-lg mb-4">
//                   📱 Aplicación Móvil (Expo)
//                 </h3>
//                 <div className="grid grid-cols-2 gap-4">
//                   <div className="bg-blue-100 p-4 rounded-lg text-center">
//                     <Users className="mx-auto mb-2 text-blue-600" size={32} />
//                     <p className="font-bold">Cliente Stack</p>
//                     <p className="text-sm text-gray-600">12-15 pantallas</p>
//                   </div>
//                   <div className="bg-green-100 p-4 rounded-lg text-center">
//                     <Shield className="mx-auto mb-2 text-green-600" size={32} />
//                     <p className="font-bold">Operario Stack</p>
//                     <p className="text-sm text-gray-600">8-10 pantallas</p>
//                   </div>
//                 </div>
//               </div>

//               <div className="text-gray-400">
//                 <ChevronRight size={32} className="rotate-90" />
//               </div>

//               <div className="w-full max-w-2xl">
//                 <h3 className="text-center font-bold text-lg mb-4">
//                   ☁️ Firebase Services
//                 </h3>
//                 <div className="grid grid-cols-3 gap-4">
//                   <div className="bg-orange-100 p-4 rounded-lg text-center">
//                     <Shield
//                       className="mx-auto mb-2 text-orange-600"
//                       size={24}
//                     />
//                     <p className="font-semibold text-sm">Auth</p>
//                   </div>
//                   <div className="bg-orange-100 p-4 rounded-lg text-center">
//                     <Database
//                       className="mx-auto mb-2 text-orange-600"
//                       size={24}
//                     />
//                     <p className="font-semibold text-sm">Firestore</p>
//                   </div>
//                   <div className="bg-orange-100 p-4 rounded-lg text-center">
//                     <Bell className="mx-auto mb-2 text-orange-600" size={24} />
//                     <p className="font-semibold text-sm">Messaging</p>
//                   </div>
//                 </div>
//               </div>

//               <div className="text-gray-400">
//                 <ChevronRight size={32} className="rotate-90" />
//               </div>

//               <div className="w-full max-w-2xl">
//                 <h3 className="text-center font-bold text-lg mb-4">
//                   💾 Backend API
//                 </h3>
//                 <div className="bg-purple-100 p-4 rounded-lg text-center">
//                   <Cloud className="mx-auto mb-2 text-purple-600" size={32} />
//                   <p className="font-semibold">Node.js / Firebase Functions</p>
//                   <p className="text-sm text-gray-600">
//                     Por definir en siguiente fase
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="bg-gray-50 rounded-lg p-6">
//             <h3 className="font-bold text-xl mb-4">
//               🗺️ Estructura de Navegación
//             </h3>
//             <div className="space-y-4 font-mono text-sm">
//               <div>
//                 <p className="font-bold">📦 App Root</p>
//                 <div className="ml-4 mt-2 space-y-1">
//                   <p>├── 🔐 Auth Stack (Login, Registro, Recuperar)</p>
//                   <p>├── 👤 Cliente Stack</p>
//                   <p className="ml-4">│ ├── Home (Lista incidencias)</p>
//                   <p className="ml-4">│ ├── Nueva Incidencia (Wizard)</p>
//                   <p className="ml-4">
//                     │ └── Perfil (Datos, Vehículos, Pólizas)
//                   </p>
//                   <p>└── 🛡️ Operario Stack</p>
//                   <p className="ml-4"> ├── Dashboard (3 tabs)</p>
//                   <p className="ml-4"> ├── Historial</p>
//                   <p className="ml-4"> └── Perfil</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// // Tab: Stack
// function StackTab() {
//   const techStack = {
//     frontend: [
//       {
//         name: "React Native",
//         version: "0.73",
//         category: "Core",
//         color: "blue",
//       },
//       { name: "Expo", version: "~50.0", category: "Core", color: "blue" },
//       { name: "TypeScript", version: "^5.3", category: "Core", color: "blue" },
//       {
//         name: "React Navigation",
//         version: "^6.1",
//         category: "Navegación",
//         color: "purple",
//       },
//       { name: "Zustand", version: "^4.4", category: "Estado", color: "green" },
//     ],
//     firebase: [
//       {
//         name: "Firebase Auth",
//         version: "^19.0",
//         category: "Autenticación",
//         color: "orange",
//       },
//       {
//         name: "Firestore",
//         version: "^19.0",
//         category: "Base de Datos",
//         color: "orange",
//       },
//       {
//         name: "Firebase Storage",
//         version: "^19.0",
//         category: "Almacenamiento",
//         color: "orange",
//       },
//       {
//         name: "Firebase Messaging",
//         version: "^19.0",
//         category: "Notificaciones",
//         color: "orange",
//       },
//     ],
//     utilities: [
//       {
//         name: "React Native Maps",
//         version: "1.10",
//         category: "Mapas",
//         color: "red",
//       },
//       {
//         name: "Expo Location",
//         version: "~16.5",
//         category: "GPS",
//         color: "red",
//       },
//       {
//         name: "Expo Image Picker",
//         version: "~14.7",
//         category: "Multimedia",
//         color: "red",
//       },
//       {
//         name: "React Hook Form",
//         version: "^7.49",
//         category: "Formularios",
//         color: "yellow",
//       },
//     ],
//   };

//   return (
//     <div className="space-y-6 animate-fade-in">
//       <div className="bg-white rounded-xl shadow-lg p-8">
//         <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
//           <Cloud size={32} />
//           Stack Tecnológico
//         </h2>

//         <div className="space-y-8">
//           <div>
//             <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
//               <Smartphone size={24} className="text-blue-600" />
//               Frontend (React Native - Expo)
//             </h3>
//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
//               {techStack.frontend.map((tech, index) => (
//                 <TechCard key={index} tech={tech} />
//               ))}
//             </div>
//           </div>

//           <div>
//             <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
//               <Cloud size={24} className="text-orange-600" />
//               Firebase Services
//             </h3>
//             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
//               {techStack.firebase.map((tech, index) => (
//                 <TechCard key={index} tech={tech} />
//               ))}
//             </div>
//           </div>

//           <div>
//             <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
//               <Settings size={24} className="text-gray-600" />
//               Librerías y Utilidades
//             </h3>
//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
//               {techStack.utilities.map((tech, index) => (
//                 <TechCard key={index} tech={tech} />
//               ))}
//             </div>
//           </div>

//           <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-6">
//             <h3 className="text-xl font-bold mb-2 flex items-center gap-2 text-yellow-800">
//               <AlertTriangle size={24} />
//               Backend (Por definir)
//             </h3>
//             <p className="text-gray-700">
//               Opciones sugeridas: <strong>Node.js + Express</strong>,{" "}
//               <strong>Firebase Functions</strong>,
//               <strong> Python + FastAPI</strong> o <strong>NestJS</strong>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// // Tab: Estimación (NUEVO)
// function EstimacionTab() {
//   const estimacionCliente = [
//     { feature: "Setup proyecto + estructura", dias: "1-2", color: "blue" },
//     { feature: "Autenticación Firebase", dias: "2-3", color: "blue" },
//     { feature: "Perfil básico", dias: "2", color: "green" },
//     { feature: "Gestión múltiples vehículos", dias: "3-4", color: "green" },
//     { feature: "Gestión múltiples pólizas", dias: "3-4", color: "green" },
//     { feature: "Registro de incidencia", dias: "5-6", color: "purple" },
//     { feature: "Lista de incidencias", dias: "2-3", color: "purple" },
//     { feature: "Detalle + timeline", dias: "3-4", color: "purple" },
//     { feature: "Notificaciones push", dias: "2-3", color: "orange" },
//     { feature: "Testing", dias: "3-4", color: "red" },
//   ];

//   const estimacionOperario = [
//     { feature: "Dashboard (3 tabs)", dias: "4-5", color: "blue" },
//     { feature: "Pool de incidencias", dias: "2-3", color: "blue" },
//     { feature: "Tomar/asignar incidencia", dias: "2", color: "green" },
//     { feature: "Detalle vista operario", dias: "3-4", color: "green" },
//     { feature: "Cambio de estados", dias: "2-3", color: "purple" },
//     { feature: "Sistema de comentarios", dias: "2-3", color: "purple" },
//     { feature: "Mapa con pins", dias: "3-4", color: "orange" },
//     { feature: "Perfil operario", dias: "2", color: "orange" },
//     { feature: "Historial", dias: "2-3", color: "orange" },
//     { feature: "Testing", dias: "3-4", color: "red" },
//   ];

//   const totalCliente = "26-35";
//   const totalOperario = "25-33";
//   const totalGeneral = "67-92";

//   return (
//     <div className="space-y-6 animate-fade-in">
//       <div className="bg-white rounded-xl shadow-lg p-8">
//         <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
//           <Calendar size={32} />
//           Estimación de Tiempos de Desarrollo
//         </h2>

//         {/* Resumen General */}
//         <div className="grid md:grid-cols-3 gap-6 mb-8">
//           <div className="bg-blue-50 rounded-lg p-6 text-center border-2 border-blue-200">
//             <TrendingUp className="mx-auto mb-2 text-blue-600" size={32} />
//             <p className="text-sm text-gray-600 mb-1">Frontend Cliente</p>
//             <p className="text-3xl font-bold text-blue-600">{totalCliente} días</p>
//             <p className="text-xs text-gray-500 mt-1">~5-7 semanas</p>
//           </div>
//           <div className="bg-green-50 rounded-lg p-6 text-center border-2 border-green-200">
//             <TrendingUp className="mx-auto mb-2 text-green-600" size={32} />
//             <p className="text-sm text-gray-600 mb-1">Frontend Operario</p>
//             <p className="text-3xl font-bold text-green-600">{totalOperario} días</p>
//             <p className="text-xs text-gray-500 mt-1">~5-7 semanas</p>
//           </div>
//           <div className="bg-purple-50 rounded-lg p-6 text-center border-2 border-purple-200">
//             <Clock className="mx-auto mb-2 text-purple-600" size={32} />
//             <p className="text-sm text-gray-600 mb-1">Total Estimado</p>
//             <p className="text-3xl font-bold text-purple-600">{totalGeneral} días</p>
//             <p className="text-xs text-gray-500 mt-1">~13-18 semanas con 1 dev</p>
//           </div>
//         </div>

//         {/* Frontend Cliente */}
//         <div className="mb-8">
//           <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
//             <Users className="text-blue-600" size={28} />
//             Frontend Cliente
//           </h3>
//           <div className="overflow-x-auto">
//             <table className="w-full">
//               <thead>
//                 <tr className="bg-gray-100">
//                   <th className="px-6 py-3 text-left font-bold text-gray-900">
//                     Pantalla / Feature
//                   </th>
//                   <th className="px-6 py-3 text-center font-bold text-gray-900">
//                     Días
//                   </th>
//                   <th className="px-6 py-3 text-right font-bold text-gray-900">
//                     Progreso
//                   </th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {estimacionCliente.map((item, index) => (
//                   <tr
//                     key={index}
//                     className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
//                   >
//                     <td className="px-6 py-4 font-medium text-gray-900">
//                       {item.feature}
//                     </td>
//                     <td className="px-6 py-4 text-center">
//                       <span
//                         className={`inline-block px-3 py-1 rounded-full bg-${item.color}-100 text-${item.color}-800 font-semibold text-sm`}
//                       >
//                         {item.dias}
//                       </span>
//                     </td>
//                     <td className="px-6 py-4">
//                       <div className="w-full bg-gray-200 rounded-full h-2">
//                         <div
//                           className={`bg-${item.color}-500 h-2 rounded-full`}
//                           style={{ width: `${(index + 1) * 10}%` }}
//                         ></div>
//                       </div>
//                     </td>
//                   </tr>
//                 ))}
//                 <tr className="bg-blue-50 font-bold">
//                   <td className="px-6 py-4 text-gray-900">SUBTOTAL CLIENTE</td>
//                   <td className="px-6 py-4 text-center">
//                     <span className="inline-block px-3 py-1 rounded-full bg-blue-200 text-blue-900 font-bold">
//                       {totalCliente} días
//                     </span>
//                   </td>
//                   <td className="px-6 py-4"></td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         </div>

//         {/* Frontend Operario */}
//         <div>
//           <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
//             <Shield className="text-green-600" size={28} />
//             Frontend Operario
//           </h3>
//           <div className="overflow-x-auto">
//             <table className="w-full">
//               <thead>
//                 <tr className="bg-gray-100">
//                   <th className="px-6 py-3 text-left font-bold text-gray-900">
//                     Pantalla / Feature
//                   </th>
//                   <th className="px-6 py-3 text-center font-bold text-gray-900">
//                     Días
//                   </th>
//                   <th className="px-6 py-3 text-right font-bold text-gray-900">
//                     Progreso
//                   </th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {estimacionOperario.map((item, index) => (
//                   <tr
//                     key={index}
//                     className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
//                   >
//                     <td className="px-6 py-4 font-medium text-gray-900">
//                       {item.feature}
//                     </td>
//                     <td className="px-6 py-4 text-center">
//                       <span
//                         className={`inline-block px-3 py-1 rounded-full bg-${item.color}-100 text-${item.color}-800 font-semibold text-sm`}
//                       >
//                         {item.dias}
//                       </span>
//                     </td>
//                     <td className="px-6 py-4">
//                       <div className="w-full bg-gray-200 rounded-full h-2">
//                         <div
//                           className={`bg-${item.color}-500 h-2 rounded-full`}
//                           style={{ width: `${(index + 1) * 10}%` }}
//                         ></div>
//                       </div>
//                     </td>
//                   </tr>
//                 ))}
//                 <tr className="bg-green-50 font-bold">
//                   <td className="px-6 py-4 text-gray-900">SUBTOTAL OPERARIO</td>
//                   <td className="px-6 py-4 text-center">
//                     <span className="inline-block px-3 py-1 rounded-full bg-green-200 text-green-900 font-bold">
//                       {totalOperario} días
//                     </span>
//                   </td>
//                   <td className="px-6 py-4"></td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         </div>

//         {/* Configuraciones de Equipo */}
//         {/* <div className="mt-8 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-6">
//           <h3 className="text-xl font-bold text-gray-900 mb-4">
//             ⚙️ Configuraciones de Equipo
//           </h3>
//           <div className="grid md:grid-cols-3 gap-4">
//             <div className="bg-white rounded-lg p-4 border-2 border-indigo-200">
//               <p className="font-bold text-indigo-900 mb-2">
//                 1 Desarrollador Frontend
//               </p>
//               <p className="text-2xl font-bold text-indigo-600">13-18 semanas</p>
//               <p className="text-sm text-gray-600 mt-1">~3.5-4.5 meses</p>
//             </div>
//             <div className="bg-white rounded-lg p-4 border-2 border-purple-200">
//               <p className="font-bold text-purple-900 mb-2">
//                 2 Desarrolladores Frontend
//               </p>
//               <p className="text-2xl font-bold text-purple-600">8-11 semanas</p>
//               <p className="text-sm text-gray-600 mt-1">~2-2.5 meses</p>
//             </div>
//             <div className="bg-white rounded-lg p-4 border-2 border-pink-200">
//               <p className="font-bold text-pink-900 mb-2">
//                 3 Desarrolladores Frontend
//               </p>
//               <p className="text-2xl font-bold text-pink-600">6-8 semanas</p>
//               <p className="text-sm text-gray-600 mt-1">~1.5-2 meses</p>
//             </div>
//           </div>
//         </div> */}
//       </div>
//     </div>
//   );
// }

// // Tab: Comparativa
// function ComparativaTab() {
//   const features = [
//     {
//       feature: "Ver incidencias",
//       cliente: "Solo las propias",
//       operario: "Todas (disponibles + asignadas)",
//     },
//     { feature: "Crear incidencia", cliente: "✅ Sí", operario: "❌ No" },
//     {
//       feature: "Cambiar estados",
//       cliente: "❌ Solo cancelar",
//       operario: "✅ Todos los cambios",
//     },
//     {
//       feature: "Gestión vehículos/pólizas",
//       cliente: "✅ CRUD completo",
//       operario: "❌ Solo visualización",
//     },
//     {
//       feature: "Ver datos del cliente",
//       cliente: "❌ No",
//       operario: "✅ Información completa",
//     },
//     {
//       feature: "Mapa",
//       cliente: "Solo su incidencia",
//       operario: "Todas sus activas",
//     },
//     {
//       feature: "Agregar comentarios",
//       cliente: "❌ No (en MVP)",
//       operario: "✅ Sí",
//     },
//     {
//       feature: "Llamadas telefónicas",
//       cliente: "Al operario asignado",
//       operario: "A cualquier cliente",
//     },
//     {
//       feature: "Notificaciones",
//       cliente: "✅ Push en tiempo real",
//       operario: "✅ Push en tiempo real",
//     },
//     {
//       feature: "Historial",
//       cliente: "Sus incidencias",
//       operario: "Incidencias atendidas",
//     },
//   ];

//   return (
//     <div className="space-y-6 animate-fade-in">
//       <div className="bg-white rounded-xl shadow-lg p-8">
//         <h2 className="text-3xl font-bold text-gray-900 mb-6">
//           ⚖️ Comparativa Cliente vs Operario
//         </h2>

//         <div className="overflow-x-auto">
//           <table className="w-full">
//             <thead>
//               <tr className="bg-gray-100">
//                 <th className="px-6 py-4 text-left font-bold text-gray-900">
//                   Funcionalidad
//                 </th>
//                 <th className="px-6 py-4 text-left font-bold text-blue-900">
//                   <div className="flex items-center gap-2">
//                     <Users size={20} />
//                     Cliente
//                   </div>
//                 </th>
//                 <th className="px-6 py-4 text-left font-bold text-green-900">
//                   <div className="flex items-center gap-2">
//                     <Shield size={20} />
//                     Operario
//                   </div>
//                 </th>
//               </tr>
//             </thead>
//             <tbody>
//               {features.map((item, index) => (
//                 <tr
//                   key={index}
//                   className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
//                 >
//                   <td className="px-6 py-4 font-medium text-gray-900">
//                     {item.feature}
//                   </td>
//                   <td className="px-6 py-4 text-gray-700">{item.cliente}</td>
//                   <td className="px-6 py-4 text-gray-700">{item.operario}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl shadow-lg p-8">
//         <h3 className="text-2xl font-bold text-gray-900 mb-4">
//           🚀 Fase 2 (Post-MVP)
//         </h3>
//         <div className="grid md:grid-cols-2 gap-4">
//           <div className="bg-white rounded-lg p-4">
//             <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
//               <MessageSquare size={20} className="text-purple-600" />
//               Chat en Tiempo Real
//             </h4>
//             <p className="text-gray-600">Sistema de mensajería con Firestore</p>
//           </div>
//           <div className="bg-white rounded-lg p-4">
//             <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
//               <Cloud size={20} className="text-blue-600" />
//               Modo Offline
//             </h4>
//             <p className="text-gray-600">Guardar borradores sin conexión</p>
//           </div>
//           <div className="bg-white rounded-lg p-4">
//             <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
//               <CheckCircle size={20} className="text-green-600" />
//               Sistema de Rating
//             </h4>
//             <p className="text-gray-600">Calificaciones mutuas</p>
//           </div>
//           <div className="bg-white rounded-lg p-4">
//             <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
//               <Settings size={20} className="text-orange-600" />
//               Dashboard Admin Web
//             </h4>
//             <p className="text-gray-600">Gestión y métricas</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// // Componentes auxiliares
// function StatCard({ title, value, subtitle, icon: Icon, color }: any) {
//   return (
//     <div
//       className={`bg-${color}-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow`}
//     >
//       <div className="flex items-center gap-3 mb-2">
//         <div className={`bg-${color}-100 p-2 rounded-lg`}>
//           <Icon className={`text-${color}-600`} size={24} />
//         </div>
//         <h3 className="font-semibold text-gray-700">{title}</h3>
//       </div>
//       <p className={`text-3xl font-bold text-${color}-600 mb-1`}>{value}</p>
//       <p className="text-sm text-gray-600">{subtitle}</p>
//     </div>
//   );
// }

// function Section({ title, icon: Icon, children }: any) {
//   return (
//     <div className="border-l-4 border-blue-500 pl-4">
//       <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
//         <Icon size={18} />
//         {title}
//       </h4>
//       {children}
//     </div>
//   );
// }

// function TechCard({ tech }: any) {
//   return (
//     <div
//       className={`bg-${tech.color}-50 border-2 border-${tech.color}-200 rounded-lg p-4 hover:shadow-md transition-shadow`}
//     >
//       <h4 className="font-bold text-gray-900 mb-1">{tech.name}</h4>
//       <p className="text-sm text-gray-600 mb-2">{tech.category}</p>
//       <span
//         className={`inline-block px-2 py-1 text-xs rounded bg-${tech.color}-200 text-${tech.color}-800 font-mono`}
//       >
//         {tech.version}
//       </span>
//     </div>
//   );
// }

// export default PresentacionMVP;

'use client'

import React, { useState } from "react";
import {
  Smartphone,
  Users,
  Car,
  FileText,
  MapPin,
  Camera,
  MessageSquare,
  Bell,
  CheckCircle,
  Clock,
  AlertTriangle,
  ChevronRight,
  Settings,
  Shield,
  Database,
  Cloud,
  Calendar,
  TrendingUp,
  Home,
  Code,
  Server,
  Workflow,
} from "lucide-react";

// Componente Principal
function PresentacionMVP() {
  const [activeTab, setActiveTab] = useState("resumen");

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-4xl font-bold text-gray-900 flex items-center gap-3">
            <Smartphone className="text-blue-600" size={40} />
            MVP - Sistema de Gestión de Incidencias
          </h1>
          <p className="text-gray-600 mt-2">
            Arquitectura Java Spring Boot + React/Expo + WhatsApp Business API
          </p>
        </div>
      </header>

      {/* Navegación por Tabs */}
      <nav className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex space-x-1 overflow-x-auto">
            {[
              { id: "resumen", label: "Resumen", icon: FileText },
              { id: "arquitectura", label: "Arquitectura", icon: Database },
              { id: "apis", label: "APIs", icon: Server },
              { id: "stack", label: "Stack", icon: Cloud },
              { id: "flujos", label: "Flujos", icon: ChevronRight },
              { id: "pantallas", label: "Pantallas", icon: Smartphone },
              { id: "estimacion", label: "Estimación", icon: Calendar },
              { id: "escalabilidad", label: "Escalabilidad", icon: TrendingUp },
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-4 font-medium transition-all ${
                    activeTab === tab.id
                      ? "border-b-4 border-blue-600 text-blue-600"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  <Icon size={20} />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Contenido */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {activeTab === "resumen" && <ResumenTab />}
        {activeTab === "arquitectura" && <ArquitecturaTab />}
        {activeTab === "apis" && <APIsTab />}
        {activeTab === "stack" && <StackTab />}
        {activeTab === "flujos" && <FlujosTab />}
        {activeTab === "pantallas" && <PantallasTab />}
        {activeTab === "estimacion" && <EstimacionTab />}
        {activeTab === "escalabilidad" && <EscalabilidadTab />}
      </main>
    </div>
  );
}

// Tab: Resumen
function ResumenTab() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          📋 Resumen Ejecutivo
        </h2>
        <div className="prose max-w-none">
          <p className="text-lg text-gray-700 mb-4">
            Sistema completo de gestión de incidencias con{" "}
            <strong>App Móvil (Expo/React Native)</strong> para clientes y{" "}
            <strong>ERP Web (React)</strong> para operadores, respaldado por{" "}
            <strong>Backend Java Spring Boot</strong> con programación reactiva.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-900 mb-3 flex items-center gap-2">
                <Smartphone size={24} />
                App Móvil (5 Pantallas)
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>1. Login</li>
                <li>2. Register (Pre-registro)</li>
                <li>3. Registro de Incidencia</li>
                <li>4. Perfil (Editar contraseña)</li>
                <li>5. Lista de Incidencias</li>
              </ul>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-green-900 mb-3 flex items-center gap-2">
                <Database size={24} />
                ERP Web (3 Vistas)
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>1. Login Operador</li>
                <li>2. Listado de Usuarios</li>
                <li>3. Editar/Ver Usuario</li>
                <li className="text-sm text-gray-600 mt-2">
                  (Completar registro: pólizas + propiedades)
                </li>
              </ul>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-purple-900 mb-3 flex items-center gap-2">
                <Server size={24} />
                Backend (9 APIs)
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>✅ Java + Spring Boot</li>
                <li>✅ WebFlux (Flux/Mono)</li>
                <li>✅ PostgreSQL + R2DBC</li>
                <li>✅ WhatsApp Business API</li>
                <li>✅ JWT Authentication</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-4 gap-6">
        <StatCard
          title="Tablas DB"
          value="4"
          subtitle="Clientes, Pólizas, Propiedades, Incidencias"
          icon={Database}
          color="blue"
        />
        <StatCard
          title="APIs Backend"
          value="9"
          subtitle="Endpoints REST"
          icon={Server}
          color="green"
        />
        <StatCard
          title="Pantallas App"
          value="5"
          subtitle="Login a Incidencias"
          icon={Smartphone}
          color="purple"
        />
        <StatCard
          title="Pantallas Web"
          value="3"
          subtitle="Login + Gestión"
          icon={Database}
          color="orange"
        />
      </div>
    </div>
  );
}

// Tab: Arquitectura
function ArquitecturaTab() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
          <Database size={32} />
          Arquitectura del Sistema
        </h2>

        <div className="space-y-8">
          {/* Diagrama de Arquitectura */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8">
            <div className="flex flex-col items-center space-y-6">
              {/* Capa Frontend */}
              <div className="w-full max-w-4xl">
                <h3 className="text-center font-bold text-lg mb-4">
                  📱 Capa de Presentación
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-100 p-6 rounded-lg text-center">
                    <Smartphone className="mx-auto mb-2 text-blue-600" size={40} />
                    <p className="font-bold text-lg">App Móvil</p>
                    <p className="text-sm text-gray-600">Expo / React Native</p>
                    <p className="text-xs text-gray-500 mt-2">5 pantallas</p>
                  </div>
                  <div className="bg-green-100 p-6 rounded-lg text-center">
                    <Database className="mx-auto mb-2 text-green-600" size={40} />
                    <p className="font-bold text-lg">ERP Web</p>
                    <p className="text-sm text-gray-600">React + TypeScript</p>
                    <p className="text-xs text-gray-500 mt-2">3 vistas</p>
                  </div>
                </div>
              </div>

              <div className="text-gray-400">
                <ChevronRight size={32} className="rotate-90" />
              </div>

              {/* Capa Backend */}
              <div className="w-full max-w-4xl">
                <h3 className="text-center font-bold text-lg mb-4">
                  ⚙️ Capa de Negocio (Backend)
                </h3>
                <div className="bg-orange-100 p-6 rounded-lg">
                  <Server className="mx-auto mb-3 text-orange-600" size={48} />
                  <p className="font-bold text-xl text-center mb-2">
                    Java Spring Boot Microservicio
                  </p>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div className="text-center">
                      <p className="font-semibold">Programación Reactiva</p>
                      <p className="text-sm text-gray-600">WebFlux + Reactor</p>
                    </div>
                    <div className="text-center">
                      <p className="font-semibold">REST APIs</p>
                      <p className="text-sm text-gray-600">9 endpoints</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-gray-400">
                <ChevronRight size={32} className="rotate-90" />
              </div>

              {/* Capa de Datos */}
              <div className="w-full max-w-4xl">
                <h3 className="text-center font-bold text-lg mb-4">
                  💾 Capa de Datos
                </h3>
                <div className="bg-purple-100 p-6 rounded-lg">
                  <Database className="mx-auto mb-3 text-purple-600" size={48} />
                  <p className="font-bold text-xl text-center mb-2">PostgreSQL</p>
                  <div className="grid grid-cols-4 gap-2 mt-4">
                    <div className="bg-white p-3 rounded text-center">
                      <p className="font-semibold text-sm">Clientes</p>
                    </div>
                    <div className="bg-white p-3 rounded text-center">
                      <p className="font-semibold text-sm">Pólizas</p>
                    </div>
                    <div className="bg-white p-3 rounded text-center">
                      <p className="font-semibold text-sm">Propiedades</p>
                    </div>
                    <div className="bg-white p-3 rounded text-center">
                      <p className="font-semibold text-sm">Incidencias</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-gray-400">
                <ChevronRight size={32} className="rotate-90" />
              </div>

              {/* Integraciones */}
              <div className="w-full max-w-4xl">
                <h3 className="text-center font-bold text-lg mb-4">
                  🔗 Integraciones Externas
                </h3>
                <div className="bg-green-100 p-6 rounded-lg text-center">
                  <MessageSquare className="mx-auto mb-3 text-green-600" size={48} />
                  <p className="font-bold text-xl">WhatsApp Business API</p>
                  <p className="text-sm text-gray-600 mt-2">
                    Notificaciones automáticas a operadores al registrar incidencia
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Modelo de Datos */}
          {/* <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="font-bold text-xl mb-4">🗄️ Modelo de Datos (PostgreSQL)</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded-lg border-2 border-blue-200">
                <h4 className="font-bold text-blue-900 mb-3">Tabla: Clientes</h4>
                <ul className="space-y-1 text-sm font-mono">
                  <li>• id (PK)</li>
                  <li>• nombre, email, telefono</li>
                  <li>• dni, password_hash</li>
                  <li>• estado (pending/registered/inactive)</li>
                  <li>• fecha_pre_registro</li>
                  <li>• fecha_registro_completo</li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded-lg border-2 border-green-200">
                <h4 className="font-bold text-green-900 mb-3">Tabla: Pólizas</h4>
                <ul className="space-y-1 text-sm font-mono">
                  <li>• id (PK)</li>
                  <li>• cliente_id (FK)</li>
                  <li>• numero_poliza, aseguradora</li>
                  <li>• tipo_cobertura</li>
                  <li>• fecha_inicio, fecha_vencimiento</li>
                  <li>• documento_url</li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded-lg border-2 border-purple-200">
                <h4 className="font-bold text-purple-900 mb-3">Tabla: Propiedades</h4>
                <ul className="space-y-1 text-sm font-mono">
                  <li>• id (PK)</li>
                  <li>• cliente_id (FK)</li>
                  <li>• poliza_id (FK)</li>
                  <li>• tipo (vehiculo/inmueble)</li>
                  <li>• placa, marca, modelo, año</li>
                  <li>• direccion (para inmuebles)</li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded-lg border-2 border-orange-200">
                <h4 className="font-bold text-orange-900 mb-3">Tabla: Incidencias</h4>
                <ul className="space-y-1 text-sm font-mono">
                  <li>• id (PK)</li>
                  <li>• cliente_id (FK)</li>
                  <li>• propiedad_id (FK)</li>
                  <li>• tipo_incidencia</li>
                  <li>• descripcion, ubicacion_gps</li>
                  <li>• imagenes_urls[]</li>
                  <li>• estado, fecha_registro</li>
                </ul>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

// Tab: APIs
function APIsTab() {
  const apis = [
    {
      metodo: "POST",
      endpoint: "/api/auth/login",
      descripcion: "Autenticación de usuario (cliente/operador)",
      request: "{ email, password }",
      response: "{ token, user, role }",
      color: "blue",
    },
    {
      metodo: "POST",
      endpoint: "/api/auth/pre-register",
      descripcion: "Pre-registro del cliente desde la app móvil",
      request: "{ nombre, email, telefono, dni, password }",
      response: "{ userId, status: 'pending' }",
      color: "green",
    },
    {
      metodo: "PUT",
      endpoint: "/api/users/{id}/complete-registration",
      descripcion: "Operador completa registro: asigna pólizas y propiedades",
      request: "{ polizas[], propiedades[] }",
      response: "{ status: 'registered' }",
      color: "purple",
    },
    {
      metodo: "POST",
      endpoint: "/api/incidents",
      descripcion: "Cliente registra incidencia + trigger automático WhatsApp",
      request: "{ clienteId, propiedadId, tipo, descripcion, gps, imagenes[] }",
      response: "{ incidentId, whatsappSent: true }",
      color: "orange",
    },
    {
      metodo: "GET",
      endpoint: "/api/incidents",
      descripcion: "Listar incidencias con filtros (estado, fecha, cliente)",
      request: "?clienteId=x&estado=y&fechaInicio=z",
      response: "{ incidents[], total, page }",
      color: "red",
    },
    {
      metodo: "GET",
      endpoint: "/api/users/me",
      descripcion: "Obtener datos del usuario autenticado (perfil completo)",
      request: "Authorization: Bearer token",
      response: "{ user, polizas[], propiedades[] }",
      color: "blue",
    },
    {
      metodo: "GET",
      endpoint: "/api/catalogs/policies",
      descripcion: "Catálogo de pólizas por cliente",
      request: "?clienteId=x",
      response: "{ policies[] }",
      color: "green",
    },
    {
      metodo: "GET",
      endpoint: "/api/catalogs/properties",
      descripcion: "Catálogo de propiedades + tipos de incidencias",
      request: "?clienteId=x",
      response: "{ properties[], incidentTypes[] }",
      color: "purple",
    },
    {
      metodo: "POST",
      endpoint: "/api/images/upload",
      descripcion: "Subir imágenes de incidencias (multipart)",
      request: "FormData con múltiples archivos",
      response: "{ imageUrls[] }",
      color: "orange",
    },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
          <Server size={32} />
          APIs del Backend (9 Endpoints)
        </h2>

        <div className="space-y-4">
          {apis.map((api, index) => (
            <div
              key={index}
              className={`bg-${api.color}-50 border-l-4 border-${api.color}-500 rounded-lg p-4 hover:shadow-md transition-shadow`}
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-3">
                  <span
                    className={`px-3 py-1 rounded-full bg-${api.color}-200 text-${api.color}-800 font-bold text-sm`}
                  >
                    {api.metodo}
                  </span>
                  <code className="text-sm font-mono font-bold text-gray-900">
                    {api.endpoint}
                  </code>
                </div>
              </div>
              <p className="text-gray-700 mb-3">{api.descripcion}</p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-semibold text-gray-600 mb-1">Request:</p>
                  <code className="block bg-white p-2 rounded text-xs">
                    {api.request}
                  </code>
                </div>
                <div>
                  <p className="font-semibold text-gray-600 mb-1">Response:</p>
                  <code className="block bg-white p-2 rounded text-xs">
                    {api.response}
                  </code>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Nota sobre WhatsApp */}
        <div className="mt-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6 border-2 border-green-200">
          <h3 className="font-bold text-xl mb-3 flex items-center gap-2">
            <MessageSquare className="text-green-600" size={28} />
            Integración WhatsApp Business API
          </h3>
          <p className="text-gray-700 mb-2">
            Cada vez que se registra una incidencia (POST /api/incidents), el backend:
          </p>
          <ul className="space-y-1 text-gray-700 ml-6">
            <li>1. Guarda la incidencia en PostgreSQL</li>
            <li>2. Dispara automáticamente un mensaje a WhatsApp Business</li>
            <li>3. Los operadores reciben notificación en el WhatsApp corporativo</li>
            <li>4. Retorna confirmación al cliente en la app</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

// Tab: Stack Tecnológico
function StackTab() {
  const techStack = {
    backend: [
      { name: "Java", version: "17+", category: "Lenguaje", color: "blue" },
      { name: "Spring Boot", version: "3.2+", category: "Framework", color: "blue" },
      { name: "Spring WebFlux", version: "3.2+", category: "Programación Reactiva", color: "green" },
      { name: "Project Reactor", version: "Latest", category: "Reactor (Flux/Mono)", color: "green" },
      { name: "PostgreSQL", version: "15+", category: "Base de Datos", color: "purple" },
      { name: "R2DBC PostgreSQL", version: "Latest", category: "Driver Reactivo", color: "purple" },
      { name: "Spring Security", version: "6.2+", category: "Seguridad + JWT", color: "red" },
      { name: "Lombok", version: "Latest", category: "Utilidades", color: "orange" },
    ],
    appMovil: [
      { name: "React Native", version: "0.73", category: "Mobile Core", color: "blue" },
      { name: "Expo", version: "~50.0", category: "Framework", color: "blue" },
      { name: "TypeScript", version: "5+", category: "Lenguaje", color: "green" },
      { name: "React Navigation", version: "6+", category: "Navegación", color: "purple" },
      { name: "Axios", version: "Latest", category: "HTTP Client", color: "orange" },
      { name: "React Hook Form", version: "7+", category: "Formularios", color: "red" },
    ],
    erpWeb: [
      { name: "React", version: "18+", category: "Framework", color: "blue" },
      { name: "TypeScript", version: "5+", category: "Lenguaje", color: "green" },
      { name: "Material-UI (MUI)", version: "5+", category: "UI Components", color: "purple" },
      { name: "React Router", version: "6+", category: "Routing", color: "orange" },
      { name: "Axios", version: "Latest", category: "HTTP Client", color: "red" },
      { name: "MUI DataGrid", version: "6+", category: "Tablas", color: "blue" },
    ],
    integraciones: [
      { name: "WhatsApp Business API", version: "Official", category: "Mensajería", color: "green" },
      { name: "JWT", version: "jjwt 0.12+", category: "Auth Tokens", color: "red" },
      { name: "Multipart Upload", version: "Spring", category: "Manejo Imágenes", color: "purple" },
    ],
    escalabilidad: [
      { name: "Eureka Server", version: "Futuro", category: "Service Discovery", color: "blue" },
      { name: "Spring Cloud Gateway", version: "Futuro", category: "API Gateway", color: "blue" },
      { name: "RabbitMQ", version: "Futuro", category: "Message Broker", color: "orange" },
      { name: "Docker", version: "Latest", category: "Containerización", color: "purple" },
    ],
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
          <Cloud size={32} />
          Stack Tecnológico Completo
        </h2>

        <div className="space-y-8">
          {/* Backend */}
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Server size={24} className="text-blue-600" />
              Backend - Java Spring Boot
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {techStack.backend.map((tech, index) => (
                <TechCard key={index} tech={tech} />
              ))}
            </div>
          </div>

          {/* App Móvil */}
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Smartphone size={24} className="text-orange-600" />
              App Móvil - Expo / React Native
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {techStack.appMovil.map((tech, index) => (
                <TechCard key={index} tech={tech} />
              ))}
            </div>
          </div>

          {/* ERP Web */}
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Database size={24} className="text-purple-600" />
              ERP Web - React + Material-UI
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {techStack.erpWeb.map((tech, index) => (
                <TechCard key={index} tech={tech} />
              ))}
            </div>
          </div>

          {/* Integraciones */}
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Workflow size={24} className="text-green-600" />
              Integraciones Externas
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              {techStack.integraciones.map((tech, index) => (
                <TechCard key={index} tech={tech} />
              ))}
            </div>
          </div>

          {/* Escalabilidad Futura */}
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <TrendingUp size={24} className="text-red-600" />
              Escalabilidad Futura
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {techStack.escalabilidad.map((tech, index) => (
                <TechCard key={index} tech={tech} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Tab: Flujos
function FlujosTab() {
  const [selectedFlow, setSelectedFlow] = useState<string>("");

  const flujos: any = {
    pre_registro: {
      title: "Pre-registro Cliente (App Móvil)",
      color: "blue",
      steps: [
        { icon: Smartphone, text: "Cliente descarga la app" },
        { icon: Users, text: "Tap en 'Crear cuenta'" },
        { icon: FileText, text: "Completa: nombre, email, teléfono, DNI, contraseña" },
        { icon: CheckCircle, text: "POST /api/auth/pre-register" },
        { icon: Database, text: "Backend guarda cliente con estado 'pending'" },
        { icon: Bell, text: "Cliente recibe confirmación" },
        { icon: AlertTriangle, text: "Cliente queda en espera de aprobación por operador" },
      ],
    },
    completar_registro: {
      title: "Operador Completa Registro (ERP Web)",
      color: "green",
      steps: [
        { icon: Database, text: "Operador hace login en ERP Web" },
        { icon: Users, text: "Ve listado de usuarios pendientes" },
        { icon: FileText, text: "Selecciona usuario y click en 'Editar'" },
        { icon: Shield, text: "Asigna pólizas (número, aseguradora, vigencia)" },
        { icon: Car, text: "Asigna propiedades (vehículos/inmuebles)" },
        { icon: CheckCircle, text: "PUT /api/users/{id}/complete-registration" },
        { icon: Database, text: "Backend actualiza estado a 'registered'" },
        { icon: Bell, text: "Cliente ahora puede registrar incidencias" },
      ],
    },
    registrar_incidencia: {
      title: "Cliente Registra Incidencia (App Móvil)",
      color: "purple",
      steps: [
        { icon: Smartphone, text: "Cliente hace login y va a 'Nueva Incidencia'" },
        { icon: Car, text: "Selecciona propiedad (vehículo/inmueble)" },
        { icon: FileText, text: "Selecciona tipo de incidencia del catálogo" },
        { icon: MapPin, text: "Captura ubicación GPS automática" },
        { icon: Camera, text: "Toma fotos de evidencia" },
        { icon: FileText, text: "Escribe descripción" },
        { icon: Cloud, text: "POST /api/images/upload (sube imágenes)" },
        { icon: CheckCircle, text: "POST /api/incidents (registra incidencia)" },
        { icon: Database, text: "Backend guarda en PostgreSQL" },
        { icon: MessageSquare, text: "Backend envía mensaje automático a WhatsApp Business" },
        { icon: Bell, text: "Operadores reciben notificación en WhatsApp corporativo" },
        { icon: Smartphone, text: "Cliente recibe confirmación en app" },
      ],
    },
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          🔄 Flujos Principales del Sistema
        </h2>

        <div className="grid md:grid-cols-3 gap-4 mb-8">
          {Object.entries(flujos).map(([key, flow]: [string, any]) => (
            <button
              key={key}
              onClick={() => setSelectedFlow(key)}
              className={`p-6 rounded-lg border-2 transition-all hover:shadow-lg ${
                selectedFlow === key
                  ? `border-${flow.color}-500 bg-${flow.color}-50`
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <h3 className="font-bold text-lg text-gray-900">{flow.title}</h3>
            </button>
          ))}
        </div>

        {selectedFlow && (
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              {flujos[selectedFlow].title}
            </h3>
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-1 bg-gray-200"></div>

              <div className="space-y-4">
                {flujos[selectedFlow].steps.map((step: any, index: number) => {
                  const StepIcon = step.icon;
                  return (
                    <div
                      key={index}
                      className="relative pl-16 flex items-start gap-4"
                    >
                      <div
                        className={`absolute left-2 w-9 h-9 rounded-full bg-${flujos[selectedFlow].color}-500 flex items-center justify-center shadow-lg z-10`}
                      >
                        <StepIcon className="text-white" size={20} />
                      </div>
                      <div className="flex-1 bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                        <p className="text-gray-900 font-medium">{step.text}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {!selectedFlow && (
          <div className="text-center text-gray-500 py-12">
            <ChevronRight size={48} className="mx-auto mb-4 opacity-50" />
            <p>Selecciona un flujo para ver el detalle paso a paso</p>
          </div>
        )}
      </div>
    </div>
  );
}

// Tab: Pantallas
function PantallasTab() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="grid md:grid-cols-2 gap-6">
        {/* App Móvil */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-blue-100 p-3 rounded-full">
              <Smartphone className="text-blue-600" size={32} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">App Móvil</h3>
              <p className="text-gray-600">5 Pantallas Principales</p>
            </div>
          </div>

          <div className="space-y-4">
            <PantallaCard
              numero={1}
              titulo="Login"
              descripcion="Autenticación con email y contraseña"
              color="blue"
            />
            <PantallaCard
              numero={2}
              titulo="Register (Pre-registro)"
              descripcion="Formulario: nombre, email, teléfono, DNI, contraseña"
              color="blue"
            />
            <PantallaCard
              numero={3}
              titulo="Registro de Incidencia"
              descripcion="Selección de propiedad, tipo, GPS, fotos, descripción"
              color="purple"
            />
            <PantallaCard
              numero={4}
              titulo="Perfil"
              descripcion="Ver datos personales y editar contraseña"
              color="green"
            />
            <PantallaCard
              numero={5}
              titulo="Lista de Incidencias"
              descripcion="Ver todas las incidencias registradas por el cliente"
              color="orange"
            />
          </div>
        </div>

        {/* ERP Web */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-green-100 p-3 rounded-full">
              <Database className="text-green-600" size={32} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">ERP Web</h3>
              <p className="text-gray-600">3 Vistas Principales</p>
            </div>
          </div>

          <div className="space-y-4">
            <PantallaCard
              numero={1}
              titulo="Login Operador"
              descripcion="Autenticación de operadores en el sistema"
              color="green"
            />
            <PantallaCard
              numero={2}
              titulo="Listado de Usuarios"
              descripcion="Grid con usuarios pendientes y registrados, filtros avanzados"
              color="purple"
            />
            <PantallaCard
              numero={3}
              titulo="Editar/Ver Usuario"
              descripcion="Modal o página para completar registro: asignar pólizas y propiedades"
              color="blue"
            />
          </div>

          <div className="mt-6 bg-green-50 border-2 border-green-200 rounded-lg p-4">
            <h4 className="font-bold text-green-900 mb-2 flex items-center gap-2">
              <CheckCircle size={20} />
              Funcionalidades Clave
            </h4>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• Diferenciación visual entre usuarios pendientes y registrados</li>
              <li>• Filtros por estado, fechas, búsqueda</li>
              <li>• Cards de métricas (total, pendientes, registrados)</li>
              <li>• Formulario para asignar múltiples pólizas</li>
              <li>• Formulario para asignar múltiples propiedades</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

// Tab: Estimación
function EstimacionTab() {
  const estimacionBackend = [
    { feature: "Setup Spring Boot + PostgreSQL", dias: "1-2", color: "blue" },
    { feature: "Configuración R2DBC + WebFlux", dias: "1-2", color: "blue" },
    { feature: "Entidades y Repositorios (4 tablas)", dias: "2-3", color: "green" },
    { feature: "API Login + JWT", dias: "2-3", color: "green" },
    { feature: "API Pre-registro", dias: "1-2", color: "purple" },
    { feature: "API Completar registro", dias: "2-3", color: "purple" },
    { feature: "API Registrar incidencia", dias: "2-3", color: "orange" },
    { feature: "Integración WhatsApp Business API", dias: "3-4", color: "orange" },
    { feature: "API Listar incidencias + filtros", dias: "2-3", color: "red" },
    { feature: "API /me (perfil)", dias: "1", color: "red" },
    { feature: "APIs Catálogos (pólizas, propiedades)", dias: "2", color: "blue" },
    { feature: "API Upload imágenes", dias: "2-3", color: "green" },
    { feature: "Testing & Ajustes", dias: "3-4", color: "purple" },
  ];

  const estimacionAppMovil = [
    { feature: "Setup Expo + Navegación", dias: "1", color: "blue" },
    { feature: "Pantalla Login", dias: "1-2", color: "blue" },
    { feature: "Pantalla Register", dias: "2-3", color: "green" },
    { feature: "Pantalla Registro Incidencia", dias: "4-5", color: "purple" },
    { feature: "Pantalla Perfil", dias: "2", color: "orange" },
    { feature: "Pantalla Lista Incidencias", dias: "2-3", color: "red" },
    { feature: "Integración con APIs", dias: "2-3", color: "blue" },
    { feature: "Testing", dias: "2-3", color: "green" },
  ];

  const estimacionERPWeb = [
    { feature: "Setup React + MUI", dias: "1", color: "blue" },
    { feature: "Pantalla Login", dias: "1", color: "blue" },
    { feature: "Pantalla Listado Usuarios", dias: "3-4", color: "green" },
    { feature: "Modal/Página Editar Usuario", dias: "3-4", color: "purple" },
    { feature: "Integración con APIs", dias: "2", color: "orange" },
    { feature: "Testing", dias: "2", color: "red" },
  ];

  const totalBackend = "17-20";
  const totalApp = "12-15";
  const totalWeb = "7-10";
  const totalGeneral = "20";

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
          <Calendar size={32} />
          Estimación de Tiempos de Desarrollo
        </h2>

        {/* Resumen General */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-blue-50 rounded-lg p-6 text-center border-2 border-blue-200">
            <Server className="mx-auto mb-2 text-blue-600" size={32} />
            <p className="text-sm text-gray-600 mb-1">Backend</p>
            <p className="text-3xl font-bold text-blue-600">{totalBackend} días</p>
            {/* <p className="text-xs text-gray-500 mt-1">~5-7 semanas</p> */}
          </div>
          <div className="bg-green-50 rounded-lg p-6 text-center border-2 border-green-200">
            <Smartphone className="mx-auto mb-2 text-green-600" size={32} />
            <p className="text-sm text-gray-600 mb-1">App Móvil</p>
            <p className="text-3xl font-bold text-green-600">{totalApp} días</p>
            {/* <p className="text-xs text-gray-500 mt-1">~3-4 semanas</p> */}
          </div>
          <div className="bg-purple-50 rounded-lg p-6 text-center border-2 border-purple-200">
            <Database className="mx-auto mb-2 text-purple-600" size={32} />
            <p className="text-sm text-gray-600 mb-1">ERP Web</p>
            <p className="text-3xl font-bold text-purple-600">{totalWeb} días</p>
            {/* <p className="text-xs text-gray-500 mt-1">~2-3 semanas</p> */}
          </div>
          <div className="bg-orange-50 rounded-lg p-6 text-center border-2 border-orange-200">
            <Clock className="mx-auto mb-2 text-orange-600" size={32} />
            <p className="text-sm text-gray-600 mb-1">Total MVP</p>
            <p className="text-3xl font-bold text-orange-600">{totalGeneral} días</p>
            {/* <p className="text-xs text-gray-500 mt-1">~10-14 semanas</p> */}
          </div>
        </div>

        {/* Backend */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Server className="text-blue-600" size={28} />
            Backend - Java Spring Boot
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-6 py-3 text-left font-bold text-gray-900">
                    Feature / API
                  </th>
                  <th className="px-6 py-3 text-center font-bold text-gray-900">
                    {/* Días */}
                  </th>
                </tr>
              </thead>
              <tbody>
                {estimacionBackend.map((item, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    <td className="px-6 py-4 font-medium text-gray-900">
                      {item.feature}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {/* <span
                        className={`inline-block px-3 py-1 rounded-full bg-${item.color}-100 text-${item.color}-800 font-semibold text-sm`}
                      >
                        {item.dias}
                      </span> */}
                    </td>
                  </tr>
                ))}
                {/* <tr className="bg-blue-50 font-bold">
                  <td className="px-6 py-4 text-gray-900">SUBTOTAL BACKEND</td>
                  <td className="px-6 py-4 text-center">
                    <span className="inline-block px-3 py-1 rounded-full bg-blue-200 text-blue-900 font-bold">
                      {totalBackend} días
                    </span>
                  </td>
                </tr> */}
              </tbody>
            </table>
          </div>
        </div>

        {/* App Móvil */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Smartphone className="text-green-600" size={28} />
            App Móvil - Expo / React Native
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-6 py-3 text-left font-bold text-gray-900">
                    Pantalla / Feature
                  </th>
                  <th className="px-6 py-3 text-center font-bold text-gray-900">
                    {/* Días */}
                  </th>
                </tr>
              </thead>
              <tbody>
                {estimacionAppMovil.map((item, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    <td className="px-6 py-4 font-medium text-gray-900">
                      {item.feature}
                    </td>
                    {/* <td className="px-6 py-4 text-center">
                      <span
                        className={`inline-block px-3 py-1 rounded-full bg-${item.color}-100 text-${item.color}-800 font-semibold text-sm`}
                      >
                        {item.dias}
                      </span>
                    </td> */}
                  </tr>
                ))}
                {/* <tr className="bg-green-50 font-bold">
                  <td className="px-6 py-4 text-gray-900">SUBTOTAL APP MÓVIL</td>
                  <td className="px-6 py-4 text-center">
                    <span className="inline-block px-3 py-1 rounded-full bg-green-200 text-green-900 font-bold">
                      {totalApp} días
                    </span>
                  </td>
                </tr> */}
              </tbody>
            </table>
          </div>
        </div>

        {/* ERP Web */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Database className="text-purple-600" size={28} />
            ERP Web - React + Material-UI
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-6 py-3 text-left font-bold text-gray-900">
                    Pantalla / Feature
                  </th>
                  <th className="px-6 py-3 text-center font-bold text-gray-900">
                    {/* Días */}
                  </th>
                </tr>
              </thead>
              <tbody>
                {estimacionERPWeb.map((item, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    <td className="px-6 py-4 font-medium text-gray-900">
                      {item.feature}
                    </td>
                    {/* <td className="px-6 py-4 text-center">
                      <span
                        className={`inline-block px-3 py-1 rounded-full bg-${item.color}-100 text-${item.color}-800 font-semibold text-sm`}
                      >
                        {item.dias}
                      </span>
                    </td> */}
                  </tr>
                ))}
                {/* <tr className="bg-purple-50 font-bold">
                  <td className="px-6 py-4 text-gray-900">SUBTOTAL ERP WEB</td>
                  <td className="px-6 py-4 text-center">
                    <span className="inline-block px-3 py-1 rounded-full bg-purple-200 text-purple-900 font-bold">
                      {totalWeb} días
                    </span>
                  </td>
                </tr> */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

// Tab: Escalabilidad
function EscalabilidadTab() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
          <TrendingUp size={32} />
          Escalabilidad y Arquitectura Futura
        </h2>

        <div className="space-y-6">
          {/* Arquitectura Actual */}
          <div className="bg-blue-50 rounded-lg p-6 border-2 border-blue-200">
            <h3 className="text-xl font-bold text-blue-900 mb-3 flex items-center gap-2">
              <CheckCircle size={24} />
              Arquitectura Actual (MVP)
            </h3>
            <p className="text-gray-700 mb-4">
              Microservicio monolítico en Java Spring Boot con programación reactiva (WebFlux + Reactor).
            </p>
            <div className="bg-white rounded-lg p-4">
              <ul className="space-y-2 text-gray-700">
                <li>• 1 microservicio único que maneja todas las operaciones</li>
                <li>• PostgreSQL como base de datos única</li>
                <li>• Programación reactiva (Flux/Mono) para alta concurrencia</li>
                <li>• WhatsApp Business API integrado directamente</li>
                <li>• JWT para autenticación</li>
              </ul>
            </div>
          </div>

          {/* Arquitectura Futura con Eureka */}
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6 border-2 border-purple-200">
            <h3 className="text-xl font-bold text-purple-900 mb-3 flex items-center gap-2">
              <TrendingUp size={24} />
              Arquitectura Escalable (Fase 2)
            </h3>
            <p className="text-gray-700 mb-4">
              Cuando la demanda crezca, se implementará arquitectura de microservicios con Eureka Server y Spring Cloud Gateway.
            </p>
            
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-bold text-purple-900 mb-2">Eureka Server</h4>
                <p className="text-sm text-gray-600 mb-2">Service Discovery & Registry</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Registro automático de microservicios</li>
                  <li>• Balanceo de carga entre instancias</li>
                  <li>• Health checks automáticos</li>
                  <li>• Failover y alta disponibilidad</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-4">
                <h4 className="font-bold text-purple-900 mb-2">Spring Cloud Gateway</h4>
                <p className="text-sm text-gray-600 mb-2">API Gateway</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Punto único de entrada para todas las APIs</li>
                  <li>• Routing dinámico a microservicios</li>
                  <li>• Rate limiting y throttling</li>
                  <li>• Autenticación centralizada</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4">
              <h4 className="font-bold text-purple-900 mb-3">Microservicios Propuestos:</h4>
              <div className="grid md:grid-cols-3 gap-3">
                <div className="bg-blue-50 p-3 rounded">
                  <p className="font-semibold text-blue-900">Auth Service</p>
                  <p className="text-xs text-gray-600">Login, JWT, Roles</p>
                </div>
                <div className="bg-green-50 p-3 rounded">
                  <p className="font-semibold text-green-900">User Service</p>
                  <p className="text-xs text-gray-600">Clientes, Pólizas, Propiedades</p>
                </div>
                <div className="bg-orange-50 p-3 rounded">
                  <p className="font-semibold text-orange-900">Incident Service</p>
                  <p className="text-xs text-gray-600">Incidencias, WhatsApp</p>
                </div>
              </div>
            </div>
          </div>

          {/* RabbitMQ */}
          <div className="bg-orange-50 rounded-lg p-6 border-2 border-orange-200">
            <h3 className="text-xl font-bold text-orange-900 mb-3 flex items-center gap-2">
              <MessageSquare size={24} />
              RabbitMQ - Message Broker
            </h3>
            <p className="text-gray-700 mb-4">
              Para desacoplar servicios y manejar comunicación asíncrona entre microservicios.
            </p>
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-bold text-orange-900 mb-2">Casos de Uso:</h4>
              <ul className="space-y-2 text-gray-700">
                <li>
                  <strong>Eventos de Incidencias:</strong> Cuando se registra una incidencia, se publica un evento que múltiples servicios pueden consumir (WhatsApp, Email, Logs, Analytics)
                </li>
                <li>
                  <strong>Procesamiento de Imágenes:</strong> Subida de imágenes en cola para procesamiento asíncrono (compresión, watermark, validación)
                </li>
                <li>
                  <strong>Notificaciones:</strong> Cola de notificaciones para envíos batch o retry logic
                </li>
                <li>
                  <strong>Dead Letter Queue:</strong> Manejo de mensajes fallidos para retry o análisis
                </li>
              </ul>
            </div>
          </div>

          {/* Docker */}
          <div className="bg-gray-50 rounded-lg p-6 border-2 border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
              <Cloud size={24} />
              Docker & Containerización
            </h3>
            <p className="text-gray-700 mb-4">
              Todos los microservicios se containerizarán con Docker para facilitar despliegue y escalamiento.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-bold text-gray-900 mb-2">Beneficios:</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Despliegue consistente en cualquier entorno</li>
                  <li>• Escalamiento horizontal fácil</li>
                  <li>• Aislamiento de dependencias</li>
                  <li>• CI/CD simplificado</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-bold text-gray-900 mb-2">Compose Stack:</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• PostgreSQL container</li>
                  <li>• RabbitMQ container</li>
                  <li>• Eureka Server container</li>
                  <li>• Gateway container</li>
                  <li>• Microservicios containers (N instancias)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Diagrama de Escalabilidad */}
          <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-lg p-6 border-2 border-indigo-200">
            <h3 className="text-xl font-bold text-indigo-900 mb-4">
              📊 Comparativa: Actual vs Futuro
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-gray-900 mb-3">Arquitectura Actual (MVP)</h4>
                <div className="bg-white rounded-lg p-4 font-mono text-xs">
                  <p>App/Web → Backend → PostgreSQL</p>
                  <p className="mt-2 text-gray-600">• 1 microservicio monolítico</p>
                  <p className="text-gray-600">• Sin balanceo de carga</p>
                  <p className="text-gray-600">• WhatsApp directo</p>
                </div>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-3">Arquitectura Futura</h4>
                <div className="bg-white rounded-lg p-4 font-mono text-xs">
                  <p>App/Web → Gateway</p>
                  <p className="ml-4">↓</p>
                  <p className="ml-4">Eureka (Load Balancer)</p>
                  <p className="ml-4">↓</p>
                  <p className="ml-4">Microservicios (3+)</p>
                  <p className="ml-4">↓</p>
                  <p className="ml-4">RabbitMQ + PostgreSQL</p>
                  <p className="mt-2 text-gray-600">• Escalamiento horizontal</p>
                  <p className="text-gray-600">• Alta disponibilidad</p>
                  <p className="text-gray-600">• Procesamiento asíncrono</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Componentes auxiliares
function StatCard({ title, value, subtitle, icon: Icon, color }: any) {
  return (
    <div
      className={`bg-${color}-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border-2 border-${color}-200`}
    >
      <div className="flex items-center gap-3 mb-2">
        <div className={`bg-${color}-100 p-2 rounded-lg`}>
          <Icon className={`text-${color}-600`} size={24} />
        </div>
        <h3 className="font-semibold text-gray-700">{title}</h3>
      </div>
      <p className={`text-3xl font-bold text-${color}-600 mb-1`}>{value}</p>
      <p className="text-sm text-gray-600">{subtitle}</p>
    </div>
  );
}

function TechCard({ tech }: any) {
  return (
    <div
      className={`bg-${tech.color}-50 border-2 border-${tech.color}-200 rounded-lg p-4 hover:shadow-md transition-shadow`}
    >
      <h4 className="font-bold text-gray-900 mb-1">{tech.name}</h4>
      <p className="text-sm text-gray-600 mb-2">{tech.category}</p>
      <span
        className={`inline-block px-2 py-1 text-xs rounded bg-${tech.color}-200 text-${tech.color}-800 font-mono`}
      >
        {tech.version}
      </span>
    </div>
  );
}

function PantallaCard({ numero, titulo, descripcion, color }: any) {
  return (
    <div className={`bg-${color}-50 border-l-4 border-${color}-500 rounded-lg p-4`}>
      <div className="flex items-center gap-3 mb-2">
        <div className={`bg-${color}-200 text-${color}-800 font-bold w-8 h-8 rounded-full flex items-center justify-center`}>
          {numero}
        </div>
        <h4 className="font-bold text-gray-900">{titulo}</h4>
      </div>
      <p className="text-sm text-gray-600 ml-11">{descripcion}</p>
    </div>
  );
}

export default PresentacionMVP;