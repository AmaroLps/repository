// 
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
            MVP - Sistema de Gestión de Incidencias Vehiculares
          </h1>
          <p className="text-gray-600 mt-2">
            Presentación Técnica del Proyecto
          </p>
        </div>
      </header>

      {/* Navegación por Tabs */}
      <nav className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex space-x-1 overflow-x-auto">
            {[
              { id: "resumen", label: "Resumen", icon: FileText },
              { id: "timeline", label: "Timeline", icon: Clock },
              { id: "roles", label: "Roles", icon: Users },
              { id: "flujos", label: "Flujos", icon: ChevronRight },
              { id: "arquitectura", label: "Arquitectura", icon: Database },
              { id: "stack", label: "Stack", icon: Cloud },
              { id: "estimacion", label: "Estimación", icon: Calendar },
              { id: "comparativa", label: "Comparativa", icon: CheckCircle },
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
        {activeTab === "timeline" && <TimelineTab />}
        {activeTab === "roles" && <RolesTab />}
        {activeTab === "flujos" && <FlujosTab />}
        {activeTab === "arquitectura" && <ArquitecturaTab />}
        {activeTab === "stack" && <StackTab />}
        {activeTab === "estimacion" && <EstimacionTab />}
        {activeTab === "comparativa" && <ComparativaTab />}
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
            Aplicación móvil desarrollada en{" "}
            <strong>Expo (React Native)</strong> para la gestión integral de
            incidencias vehiculares con dos roles principales:{" "}
            <strong>Cliente</strong> y <strong>Operario</strong>.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-900 mb-3 flex items-center gap-2">
                <Users size={24} />
                Actores del Sistema
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>
                  <strong>Cliente:</strong> Reporta y da seguimiento a
                  incidencias
                </li>
                <li>
                  <strong>Operario:</strong> Atiende y resuelve incidencias
                </li>
              </ul>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-green-900 mb-3 flex items-center gap-2">
                <CheckCircle size={24} />
                Características Clave
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>✅ Múltiples vehículos y pólizas</li>
                <li>✅ Geolocalización GPS</li>
                <li>✅ Notificaciones Push (FCM)</li>
                <li>✅ Timeline de estados</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <StatCard
          title="Estimación Total"
          value="10-14 semanas"
          subtitle="Con 1 desarrollador"
          icon={Clock}
          color="blue"
        />
        <StatCard
          title="Pantallas Cliente"
          value="12-15"
          subtitle="Pantallas principales"
          icon={Smartphone}
          color="green"
        />
        <StatCard
          title="Pantallas Operario"
          value="8-10"
          subtitle="Pantallas principales"
          icon={Users}
          color="purple"
        />
      </div>
    </div>
  );
}

// Tab: Timeline
function TimelineTab() {
  const fases = [
    {
      fase: "Setup Inicial",
      duracion: "1-2 días",
      items: [
        "Configuración Expo",
        "Estructura de carpetas",
        "Firebase setup",
        "Navegación base",
      ],
      color: "blue",
    },
    {
      fase: "Autenticación y Roles",
      duracion: "2-3 días",
      items: [
        "Login/Registro",
        "Firebase Auth",
        "Sistema de roles",
        "Guards de navegación",
      ],
      color: "green",
    },
    {
      fase: "Frontend Cliente",
      duracion: "27-36 días",
      items: [
        "Perfil y gestión",
        "Vehículos y pólizas",
        "Registro de incidencia",
        "Lista y detalles",
      ],
      color: "purple",
    },
    {
      fase: "Frontend Operario",
      duracion: "26-35 días",
      items: [
        "Dashboard 3 tabs",
        "Pool de incidencias",
        "Gestión de estados",
        "Comentarios y mapas",
      ],
      color: "orange",
    },
    {
      fase: "Integración",
      duracion: "14-21 días",
      items: [
        "Componentes compartidos",
        "Notificaciones FCM",
        "Testing E2E",
        "Optimización",
      ],
      color: "red",
    },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
          <Clock size={32} />
          Timeline del Proyecto
        </h2>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gray-200"></div>

          <div className="space-y-8">
            {fases.map((fase, index) => (
              <div key={index} className="relative pl-20">
                <div
                  className={`absolute left-4 w-9 h-9 rounded-full bg-${fase.color}-500 flex items-center justify-center text-white font-bold shadow-lg`}
                >
                  {index + 1}
                </div>

                <div
                  className={`bg-${fase.color}-50 rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900">
                      {fase.fase}
                    </h3>
                    <span
                      className={`px-4 py-1 rounded-full bg-${fase.color}-200 text-${fase.color}-800 font-semibold text-sm`}
                    >
                      {fase.duracion}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {fase.items.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-gray-700"
                      >
                        <ChevronRight
                          size={16}
                          className={`text-${fase.color}-600`}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Tab: Roles
function RolesTab() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="grid md:grid-cols-2 gap-6">
        {/* Cliente */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-blue-100 p-3 rounded-full">
              <Users className="text-blue-600" size={32} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Cliente</h3>
              <p className="text-gray-600">Usuario que reporta incidencias</p>
            </div>
          </div>

          <div className="space-y-4">
            <Section title="Puede hacer:" icon={CheckCircle}>
              <ul className="space-y-2 text-gray-700">
                <li>✅ Registrar incidencias vehiculares</li>
                <li>✅ Gestionar múltiples vehículos y pólizas</li>
                <li>✅ Ver estado de sus incidencias en tiempo real</li>
                <li>✅ Recibir notificaciones de actualizaciones</li>
                <li>✅ Cancelar incidencias (con justificación)</li>
                <li>✅ Ver historial completo</li>
              </ul>
            </Section>

            <Section title="No puede hacer:" icon={AlertTriangle}>
              <ul className="space-y-2 text-gray-700">
                <li>❌ Ver incidencias de otros clientes</li>
                <li>❌ Cambiar estados (excepto cancelar)</li>
                <li>❌ Asignarse operarios</li>
              </ul>
            </Section>
          </div>
        </div>

        {/* Operario */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-green-100 p-3 rounded-full">
              <Shield className="text-green-600" size={32} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Operario</h3>
              <p className="text-gray-600">Personal que atiende incidencias</p>
            </div>
          </div>

          <div className="space-y-4">
            <Section title="Puede hacer:" icon={CheckCircle}>
              <ul className="space-y-2 text-gray-700">
                <li>✅ Ver pool de incidencias disponibles</li>
                <li>✅ Tomar/asignarse incidencias</li>
                <li>✅ Cambiar estados de incidencias</li>
                <li>✅ Agregar comentarios y actualizaciones</li>
                <li>✅ Ver datos completos del cliente</li>
                <li>✅ Marcar incidencias como resueltas</li>
                <li>✅ Ver mapa con todas sus incidencias activas</li>
              </ul>
            </Section>

            <Section title="No puede hacer:" icon={AlertTriangle}>
              <ul className="space-y-2 text-gray-700">
                <li>❌ Editar datos del cliente</li>
                <li>❌ Eliminar incidencias</li>
                <li>❌ Crear incidencias</li>
              </ul>
            </Section>
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
    cliente_registra: {
      title: "Cliente Registra Incidencia",
      color: "blue",
      steps: [
        { icon: Smartphone, text: "Cliente abre la app y hace login" },
        { icon: Car, text: "Selecciona vehículo (si tiene múltiples)" },
        { icon: MapPin, text: "Confirma ubicación GPS automática" },
        { icon: Camera, text: "Toma fotos de evidencia (min 2)" },
        { icon: FileText, text: "Escribe descripción detallada" },
        { icon: Users, text: "[Opcional] Agrega datos de terceros" },
        { icon: CheckCircle, text: "Revisa resumen y confirma" },
        { icon: Cloud, text: "App sube fotos con barra de progreso" },
        { icon: Bell, text: 'Incidencia creada - Estado: "Registrada"' },
        { icon: Smartphone, text: "Cliente recibe confirmación" },
      ],
    },
    gestion_vehiculos: {
      title: "Gestión de Vehículos y Pólizas",
      color: "purple",
      steps: [
        { icon: Car, text: "Cliente va a Perfil > Mis Vehículos" },
        { icon: CheckCircle, text: "Ve lista de vehículos registrados" },
        { icon: FileText, text: "Tap en (+) para agregar nuevo vehículo" },
        { icon: Camera, text: "Completa datos: placa, marca, modelo, año" },
        { icon: Shield, text: "Asocia póliza al vehículo" },
        { icon: Cloud, text: "Sube documento de póliza (PDF)" },
        { icon: CheckCircle, text: "Sistema valida vigencia de póliza" },
        { icon: Bell, text: "Recibe alertas antes de vencimiento" },
      ],
    },
    operario_atiende: {
      title: "Operario Atiende Incidencia",
      color: "green",
      steps: [
        { icon: Smartphone, text: "Operario abre Dashboard" },
        {
          icon: AlertTriangle,
          text: 'Tab "Disponibles" > Ve pool de incidencias',
        },
        { icon: MapPin, text: "Selecciona incidencia cercana" },
        {
          icon: FileText,
          text: "Revisa detalle completo (cliente, fotos, ubicación)",
        },
        { icon: CheckCircle, text: 'Tap "Tomar incidencia" > Confirmación' },
        {
          icon: Bell,
          text: 'Estado → "Asignada" (cliente recibe notificación)',
        },
        { icon: Clock, text: 'Tap "Iniciar atención" → Estado: "En atención"' },
        { icon: MessageSquare, text: "Agrega comentarios y fotos de progreso" },
        {
          icon: Bell,
          text: "Cliente recibe notificaciones de actualizaciones",
        },
        { icon: CheckCircle, text: 'Tap "Marcar como resuelta"' },
        { icon: FileText, text: "Llena formulario de cierre + fotos finales" },
        { icon: CheckCircle, text: 'Estado → "Resuelta" (cliente notificado)' },
      ],
    },
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          🔄 Flujos Principales
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

// Tab: Arquitectura
function ArquitecturaTab() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
          <Database size={32} />
          Arquitectura de la Aplicación
        </h2>

        <div className="space-y-8">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8">
            <div className="flex flex-col items-center space-y-6">
              <div className="w-full max-w-2xl">
                <h3 className="text-center font-bold text-lg mb-4">
                  📱 Aplicación Móvil (Expo)
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-100 p-4 rounded-lg text-center">
                    <Users className="mx-auto mb-2 text-blue-600" size={32} />
                    <p className="font-bold">Cliente Stack</p>
                    <p className="text-sm text-gray-600">12-15 pantallas</p>
                  </div>
                  <div className="bg-green-100 p-4 rounded-lg text-center">
                    <Shield className="mx-auto mb-2 text-green-600" size={32} />
                    <p className="font-bold">Operario Stack</p>
                    <p className="text-sm text-gray-600">8-10 pantallas</p>
                  </div>
                </div>
              </div>

              <div className="text-gray-400">
                <ChevronRight size={32} className="rotate-90" />
              </div>

              <div className="w-full max-w-2xl">
                <h3 className="text-center font-bold text-lg mb-4">
                  ☁️ Firebase Services
                </h3>
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-orange-100 p-4 rounded-lg text-center">
                    <Shield
                      className="mx-auto mb-2 text-orange-600"
                      size={24}
                    />
                    <p className="font-semibold text-sm">Auth</p>
                  </div>
                  <div className="bg-orange-100 p-4 rounded-lg text-center">
                    <Database
                      className="mx-auto mb-2 text-orange-600"
                      size={24}
                    />
                    <p className="font-semibold text-sm">Firestore</p>
                  </div>
                  <div className="bg-orange-100 p-4 rounded-lg text-center">
                    <Bell className="mx-auto mb-2 text-orange-600" size={24} />
                    <p className="font-semibold text-sm">Messaging</p>
                  </div>
                </div>
              </div>

              <div className="text-gray-400">
                <ChevronRight size={32} className="rotate-90" />
              </div>

              <div className="w-full max-w-2xl">
                <h3 className="text-center font-bold text-lg mb-4">
                  💾 Backend API
                </h3>
                <div className="bg-purple-100 p-4 rounded-lg text-center">
                  <Cloud className="mx-auto mb-2 text-purple-600" size={32} />
                  <p className="font-semibold">Node.js / Firebase Functions</p>
                  <p className="text-sm text-gray-600">
                    Por definir en siguiente fase
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="font-bold text-xl mb-4">
              🗺️ Estructura de Navegación
            </h3>
            <div className="space-y-4 font-mono text-sm">
              <div>
                <p className="font-bold">📦 App Root</p>
                <div className="ml-4 mt-2 space-y-1">
                  <p>├── 🔐 Auth Stack (Login, Registro, Recuperar)</p>
                  <p>├── 👤 Cliente Stack</p>
                  <p className="ml-4">│ ├── Home (Lista incidencias)</p>
                  <p className="ml-4">│ ├── Nueva Incidencia (Wizard)</p>
                  <p className="ml-4">
                    │ └── Perfil (Datos, Vehículos, Pólizas)
                  </p>
                  <p>└── 🛡️ Operario Stack</p>
                  <p className="ml-4"> ├── Dashboard (3 tabs)</p>
                  <p className="ml-4"> ├── Historial</p>
                  <p className="ml-4"> └── Perfil</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Tab: Stack
function StackTab() {
  const techStack = {
    frontend: [
      {
        name: "React Native",
        version: "0.73",
        category: "Core",
        color: "blue",
      },
      { name: "Expo", version: "~50.0", category: "Core", color: "blue" },
      { name: "TypeScript", version: "^5.3", category: "Core", color: "blue" },
      {
        name: "React Navigation",
        version: "^6.1",
        category: "Navegación",
        color: "purple",
      },
      { name: "Zustand", version: "^4.4", category: "Estado", color: "green" },
    ],
    firebase: [
      {
        name: "Firebase Auth",
        version: "^19.0",
        category: "Autenticación",
        color: "orange",
      },
      {
        name: "Firestore",
        version: "^19.0",
        category: "Base de Datos",
        color: "orange",
      },
      {
        name: "Firebase Storage",
        version: "^19.0",
        category: "Almacenamiento",
        color: "orange",
      },
      {
        name: "Firebase Messaging",
        version: "^19.0",
        category: "Notificaciones",
        color: "orange",
      },
    ],
    utilities: [
      {
        name: "React Native Maps",
        version: "1.10",
        category: "Mapas",
        color: "red",
      },
      {
        name: "Expo Location",
        version: "~16.5",
        category: "GPS",
        color: "red",
      },
      {
        name: "Expo Image Picker",
        version: "~14.7",
        category: "Multimedia",
        color: "red",
      },
      {
        name: "React Hook Form",
        version: "^7.49",
        category: "Formularios",
        color: "yellow",
      },
    ],
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
          <Cloud size={32} />
          Stack Tecnológico
        </h2>

        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Smartphone size={24} className="text-blue-600" />
              Frontend (React Native - Expo)
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {techStack.frontend.map((tech, index) => (
                <TechCard key={index} tech={tech} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Cloud size={24} className="text-orange-600" />
              Firebase Services
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {techStack.firebase.map((tech, index) => (
                <TechCard key={index} tech={tech} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Settings size={24} className="text-gray-600" />
              Librerías y Utilidades
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {techStack.utilities.map((tech, index) => (
                <TechCard key={index} tech={tech} />
              ))}
            </div>
          </div>

          <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-2 flex items-center gap-2 text-yellow-800">
              <AlertTriangle size={24} />
              Backend (Por definir)
            </h3>
            <p className="text-gray-700">
              Opciones sugeridas: <strong>Node.js + Express</strong>,{" "}
              <strong>Firebase Functions</strong>,
              <strong> Python + FastAPI</strong> o <strong>NestJS</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Tab: Estimación (NUEVO)
function EstimacionTab() {
  const estimacionCliente = [
    { feature: "Setup proyecto + estructura", dias: "1-2", color: "blue" },
    { feature: "Autenticación Firebase", dias: "2-3", color: "blue" },
    { feature: "Perfil básico", dias: "2", color: "green" },
    { feature: "Gestión múltiples vehículos", dias: "3-4", color: "green" },
    { feature: "Gestión múltiples pólizas", dias: "3-4", color: "green" },
    { feature: "Registro de incidencia", dias: "5-6", color: "purple" },
    { feature: "Lista de incidencias", dias: "2-3", color: "purple" },
    { feature: "Detalle + timeline", dias: "3-4", color: "purple" },
    { feature: "Notificaciones push", dias: "2-3", color: "orange" },
    { feature: "Testing", dias: "3-4", color: "red" },
  ];

  const estimacionOperario = [
    { feature: "Dashboard (3 tabs)", dias: "4-5", color: "blue" },
    { feature: "Pool de incidencias", dias: "2-3", color: "blue" },
    { feature: "Tomar/asignar incidencia", dias: "2", color: "green" },
    { feature: "Detalle vista operario", dias: "3-4", color: "green" },
    { feature: "Cambio de estados", dias: "2-3", color: "purple" },
    { feature: "Sistema de comentarios", dias: "2-3", color: "purple" },
    { feature: "Mapa con pins", dias: "3-4", color: "orange" },
    { feature: "Perfil operario", dias: "2", color: "orange" },
    { feature: "Historial", dias: "2-3", color: "orange" },
    { feature: "Testing", dias: "3-4", color: "red" },
  ];

  const totalCliente = "26-35";
  const totalOperario = "25-33";
  const totalGeneral = "67-92";

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
          <Calendar size={32} />
          Estimación de Tiempos de Desarrollo
        </h2>

        {/* Resumen General */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-blue-50 rounded-lg p-6 text-center border-2 border-blue-200">
            <TrendingUp className="mx-auto mb-2 text-blue-600" size={32} />
            <p className="text-sm text-gray-600 mb-1">Frontend Cliente</p>
            <p className="text-3xl font-bold text-blue-600">{totalCliente} días</p>
            <p className="text-xs text-gray-500 mt-1">~5-7 semanas</p>
          </div>
          <div className="bg-green-50 rounded-lg p-6 text-center border-2 border-green-200">
            <TrendingUp className="mx-auto mb-2 text-green-600" size={32} />
            <p className="text-sm text-gray-600 mb-1">Frontend Operario</p>
            <p className="text-3xl font-bold text-green-600">{totalOperario} días</p>
            <p className="text-xs text-gray-500 mt-1">~5-7 semanas</p>
          </div>
          <div className="bg-purple-50 rounded-lg p-6 text-center border-2 border-purple-200">
            <Clock className="mx-auto mb-2 text-purple-600" size={32} />
            <p className="text-sm text-gray-600 mb-1">Total Estimado</p>
            <p className="text-3xl font-bold text-purple-600">{totalGeneral} días</p>
            <p className="text-xs text-gray-500 mt-1">~13-18 semanas con 1 dev</p>
          </div>
        </div>

        {/* Frontend Cliente */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Users className="text-blue-600" size={28} />
            Frontend Cliente
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-6 py-3 text-left font-bold text-gray-900">
                    Pantalla / Feature
                  </th>
                  <th className="px-6 py-3 text-center font-bold text-gray-900">
                    Días
                  </th>
                  <th className="px-6 py-3 text-right font-bold text-gray-900">
                    Progreso
                  </th>
                </tr>
              </thead>
              <tbody>
                {estimacionCliente.map((item, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    <td className="px-6 py-4 font-medium text-gray-900">
                      {item.feature}
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span
                        className={`inline-block px-3 py-1 rounded-full bg-${item.color}-100 text-${item.color}-800 font-semibold text-sm`}
                      >
                        {item.dias}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className={`bg-${item.color}-500 h-2 rounded-full`}
                          style={{ width: `${(index + 1) * 10}%` }}
                        ></div>
                      </div>
                    </td>
                  </tr>
                ))}
                <tr className="bg-blue-50 font-bold">
                  <td className="px-6 py-4 text-gray-900">SUBTOTAL CLIENTE</td>
                  <td className="px-6 py-4 text-center">
                    <span className="inline-block px-3 py-1 rounded-full bg-blue-200 text-blue-900 font-bold">
                      {totalCliente} días
                    </span>
                  </td>
                  <td className="px-6 py-4"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Frontend Operario */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Shield className="text-green-600" size={28} />
            Frontend Operario
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-6 py-3 text-left font-bold text-gray-900">
                    Pantalla / Feature
                  </th>
                  <th className="px-6 py-3 text-center font-bold text-gray-900">
                    Días
                  </th>
                  <th className="px-6 py-3 text-right font-bold text-gray-900">
                    Progreso
                  </th>
                </tr>
              </thead>
              <tbody>
                {estimacionOperario.map((item, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    <td className="px-6 py-4 font-medium text-gray-900">
                      {item.feature}
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span
                        className={`inline-block px-3 py-1 rounded-full bg-${item.color}-100 text-${item.color}-800 font-semibold text-sm`}
                      >
                        {item.dias}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className={`bg-${item.color}-500 h-2 rounded-full`}
                          style={{ width: `${(index + 1) * 10}%` }}
                        ></div>
                      </div>
                    </td>
                  </tr>
                ))}
                <tr className="bg-green-50 font-bold">
                  <td className="px-6 py-4 text-gray-900">SUBTOTAL OPERARIO</td>
                  <td className="px-6 py-4 text-center">
                    <span className="inline-block px-3 py-1 rounded-full bg-green-200 text-green-900 font-bold">
                      {totalOperario} días
                    </span>
                  </td>
                  <td className="px-6 py-4"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Configuraciones de Equipo */}
        {/* <div className="mt-8 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            ⚙️ Configuraciones de Equipo
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg p-4 border-2 border-indigo-200">
              <p className="font-bold text-indigo-900 mb-2">
                1 Desarrollador Frontend
              </p>
              <p className="text-2xl font-bold text-indigo-600">13-18 semanas</p>
              <p className="text-sm text-gray-600 mt-1">~3.5-4.5 meses</p>
            </div>
            <div className="bg-white rounded-lg p-4 border-2 border-purple-200">
              <p className="font-bold text-purple-900 mb-2">
                2 Desarrolladores Frontend
              </p>
              <p className="text-2xl font-bold text-purple-600">8-11 semanas</p>
              <p className="text-sm text-gray-600 mt-1">~2-2.5 meses</p>
            </div>
            <div className="bg-white rounded-lg p-4 border-2 border-pink-200">
              <p className="font-bold text-pink-900 mb-2">
                3 Desarrolladores Frontend
              </p>
              <p className="text-2xl font-bold text-pink-600">6-8 semanas</p>
              <p className="text-sm text-gray-600 mt-1">~1.5-2 meses</p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

// Tab: Comparativa
function ComparativaTab() {
  const features = [
    {
      feature: "Ver incidencias",
      cliente: "Solo las propias",
      operario: "Todas (disponibles + asignadas)",
    },
    { feature: "Crear incidencia", cliente: "✅ Sí", operario: "❌ No" },
    {
      feature: "Cambiar estados",
      cliente: "❌ Solo cancelar",
      operario: "✅ Todos los cambios",
    },
    {
      feature: "Gestión vehículos/pólizas",
      cliente: "✅ CRUD completo",
      operario: "❌ Solo visualización",
    },
    {
      feature: "Ver datos del cliente",
      cliente: "❌ No",
      operario: "✅ Información completa",
    },
    {
      feature: "Mapa",
      cliente: "Solo su incidencia",
      operario: "Todas sus activas",
    },
    {
      feature: "Agregar comentarios",
      cliente: "❌ No (en MVP)",
      operario: "✅ Sí",
    },
    {
      feature: "Llamadas telefónicas",
      cliente: "Al operario asignado",
      operario: "A cualquier cliente",
    },
    {
      feature: "Notificaciones",
      cliente: "✅ Push en tiempo real",
      operario: "✅ Push en tiempo real",
    },
    {
      feature: "Historial",
      cliente: "Sus incidencias",
      operario: "Incidencias atendidas",
    },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          ⚖️ Comparativa Cliente vs Operario
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-6 py-4 text-left font-bold text-gray-900">
                  Funcionalidad
                </th>
                <th className="px-6 py-4 text-left font-bold text-blue-900">
                  <div className="flex items-center gap-2">
                    <Users size={20} />
                    Cliente
                  </div>
                </th>
                <th className="px-6 py-4 text-left font-bold text-green-900">
                  <div className="flex items-center gap-2">
                    <Shield size={20} />
                    Operario
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((item, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                >
                  <td className="px-6 py-4 font-medium text-gray-900">
                    {item.feature}
                  </td>
                  <td className="px-6 py-4 text-gray-700">{item.cliente}</td>
                  <td className="px-6 py-4 text-gray-700">{item.operario}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl shadow-lg p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          🚀 Fase 2 (Post-MVP)
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white rounded-lg p-4">
            <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
              <MessageSquare size={20} className="text-purple-600" />
              Chat en Tiempo Real
            </h4>
            <p className="text-gray-600">Sistema de mensajería con Firestore</p>
          </div>
          <div className="bg-white rounded-lg p-4">
            <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
              <Cloud size={20} className="text-blue-600" />
              Modo Offline
            </h4>
            <p className="text-gray-600">Guardar borradores sin conexión</p>
          </div>
          <div className="bg-white rounded-lg p-4">
            <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
              <CheckCircle size={20} className="text-green-600" />
              Sistema de Rating
            </h4>
            <p className="text-gray-600">Calificaciones mutuas</p>
          </div>
          <div className="bg-white rounded-lg p-4">
            <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
              <Settings size={20} className="text-orange-600" />
              Dashboard Admin Web
            </h4>
            <p className="text-gray-600">Gestión y métricas</p>
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
      className={`bg-${color}-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow`}
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

function Section({ title, icon: Icon, children }: any) {
  return (
    <div className="border-l-4 border-blue-500 pl-4">
      <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
        <Icon size={18} />
        {title}
      </h4>
      {children}
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

export default PresentacionMVP;