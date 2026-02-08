'use client'
import React, { useState } from 'react';
import { 
  Server, 
  Database, 
  Lock, 
  Users, 
  BarChart3, 
  FileText, 
  MessageSquare, 
  GitBranch, 
  Shield, 
  Clock 
} from 'lucide-react';

interface Service {
  name: string;
  icon: React.ComponentType<any>;
  color: string;
  description: string;
  tech: string[];
}

interface Services {
  gateway: Service;
  eureka: Service;
  usuarios: Service;
  indicadores: Service;
  pedidos: Service;
  rabbitmq: Service;
}

interface ServiceCardProps {
  serviceKey: string;
  service: Service;
  isMain?: boolean;
  isSelected: boolean;
  onClick: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  serviceKey, 
  service, 
  isMain = false, 
  isSelected, 
  onClick 
}) => {
  const IconComponent = service.icon;
  const colorMap: Record<string, string> = {
    'bg-purple-500': 'purple',
    'bg-blue-500': 'blue',
    'bg-green-500': 'green',
    'bg-orange-500': 'orange',
    'bg-red-500': 'red',
    'bg-yellow-500': 'yellow',
  };
  
  const colorName = colorMap[service.color] || 'slate';
  
  return (
    <div 
      className={`bg-slate-800 rounded-lg p-6 border-2 ${
        isSelected 
          ? `border-${colorName}-400 shadow-2xl scale-105` 
          : 'border-slate-600'
      } transition-all cursor-pointer shadow-xl ${
        isMain ? '' : 'flex-1 min-w-[280px] max-w-[320px]'
      }`}
      onClick={onClick}
    >
      <div className="flex items-center gap-3 mb-3">
        <div className={`p-3 ${service.color} rounded-lg`}>
          <IconComponent className={isMain ? 'w-7 h-7' : 'w-6 h-6'} />
        </div>
        <div className={isMain ? 'flex-1' : ''}>
          <h3 className={`${isMain ? 'text-2xl' : 'text-lg'} font-bold text-white`}>
            {service.name}
          </h3>
          <p className="text-slate-400 text-sm">{service.description}</p>
        </div>
        {isMain && serviceKey === 'gateway' && <Lock className="w-6 h-6 text-purple-400" />}
        {isMain && serviceKey === 'eureka' && <Database className="w-6 h-6 text-blue-400" />}
        {isMain && serviceKey === 'rabbitmq' && <Clock className="w-6 h-6 text-yellow-400" />}
      </div>
      {isSelected && (
        <div className={`mt-4 ${isMain ? 'flex flex-wrap gap-2' : 'space-y-1'}`}>
          {service.tech.map((tech, idx) => (
            isMain ? (
              <span 
                key={idx} 
                className={`bg-${colorName}-900 text-${colorName}-200 px-3 py-1 rounded-full text-sm`}
              >
                {tech}
              </span>
            ) : (
              <div 
                key={idx} 
                className={`bg-${colorName}-900 text-${colorName}-200 px-2 py-1 rounded text-xs`}
              >
                {tech}
              </div>
            )
          ))}
        </div>
      )}
    </div>
  );
};

const MicroservicesArchitecture: React.FC = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const services: Services = {
    gateway: {
      name: 'Spring Cloud Gateway',
      icon: GitBranch,
      color: 'bg-purple-500',
      description: 'Punto de entrada único al sistema. Enruta las peticiones a los microservicios correspondientes.',
      tech: ['Spring Cloud Gateway', 'JWT Validation', 'Load Balancing', 'Rate Limiting']
    },
    eureka: {
      name: 'Eureka Server',
      icon: Server,
      color: 'bg-blue-500',
      description: 'Service Discovery. Registra y gestiona la ubicación de todos los microservicios.',
      tech: ['Spring Cloud Netflix Eureka', 'Service Registry', 'Health Checks', 'Auto-scaling']
    },
    usuarios: {
      name: 'MS Usuarios',
      icon: Users,
      color: 'bg-green-500',
      description: 'Gestión, registro y mantenimiento de usuarios del sistema.',
      tech: ['Spring Boot', 'Java 17', 'PostgreSQL', 'JWT Generation', 'BCrypt']
    },
    indicadores: {
      name: 'MS Indicadores',
      icon: BarChart3,
      color: 'bg-orange-500',
      description: 'Gestiona KPIs del call center: productividad, efectividad, atención de leads.',
      tech: ['Spring Boot', 'Java 17', 'PostgreSQL', 'Análisis de Datos', 'Reporting']
    },
    pedidos: {
      name: 'MS Gestión Pedidos',
      icon: FileText,
      color: 'bg-red-500',
      description: 'Gestiona solicitudes de información de indicadores. Proceso asíncrono con RabbitMQ.',
      tech: ['Spring Boot', 'Java 17', 'Spring WebFlux', 'RabbitMQ Producer', 'MongoDB']
    },
    rabbitmq: {
      name: 'RabbitMQ',
      icon: MessageSquare,
      color: 'bg-yellow-500',
      description: 'Message Broker para procesamiento asíncrono de pedidos de indicadores.',
      tech: ['Message Queue', 'Asynchronous Processing', 'Event-Driven', 'Dead Letter Queue']
    }
  };

  const frontend = {
    name: 'Frontend Angular + TypeScript',
    sections: [
      'Login (JWT)', 
      'Dashboard Indicadores', 
      'Registro Pedidos', 
      'Gestión Usuarios'
    ]
  };

  const flowSteps = [
    'Usuario se autentica en el frontend Angular (Login JWT)',
    'Gateway valida el token JWT y enruta al microservicio correspondiente',
    'Eureka Server gestiona el registro y descubrimiento de servicios',
    'MS Usuarios valida credenciales y permisos del usuario',
    'Usuario solicita indicadores con filtros (fechas, áreas, enfoques)',
    'MS Gestión Pedidos crea solicitud y envía a cola RabbitMQ (procesamiento asíncrono)',
    'Worker procesa pedido: consulta MS Indicadores y genera respuesta',
    'Dashboard muestra KPIs y trazabilidad de pedidos realizados'
  ];

  const techStack = [
    { icon: '☕', text: 'Java 17' },
    { icon: '🍃', text: 'Spring Boot 3.x' },
    { icon: '⚛️', text: 'Angular + TypeScript' },
    { icon: '🔐', text: 'JWT Security' },
    { icon: '🔄', text: 'WebFlux (Reactive)' },
    { icon: '🐰', text: 'RabbitMQ' },
    { icon: '🗄️', text: 'PostgreSQL' }
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Plataforma Integral de Gestión y Análisis de Indicadores
          </h1>
          <p className="text-slate-300 text-lg md:text-xl">
            Arquitectura de Microservicios con Spring Boot, Eureka y RabbitMQ
          </p>
          <div className="mt-4 inline-flex items-center gap-2 bg-slate-800 px-4 py-2 rounded-full border border-slate-600">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-slate-400 text-sm">Java 17 • Spring Boot 3.x • Arquitectura Reactiva</span>
          </div>
        </div>

        {/* Architecture Diagram */}
        <div className="space-y-8">
          
          {/* Frontend Layer */}
          <div className="bg-slate-800 rounded-lg p-6 border-2 border-cyan-500 shadow-xl hover:shadow-2xl transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-cyan-500 rounded-lg">
                  <Server className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{frontend.name}</h3>
                  <p className="text-slate-400 text-sm">Capa de Presentación</p>
                </div>
              </div>
              <Shield className="w-6 h-6 text-cyan-400" />
            </div>
            <div className="flex flex-wrap gap-3">
              {frontend.sections.map((section, idx) => (
                <div 
                  key={idx} 
                  className="bg-slate-700 px-4 py-2 rounded-lg border border-cyan-400 hover:bg-slate-600 transition-colors"
                >
                  <span className="text-cyan-300 text-sm font-medium">{section}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Arrow Down */}
          <div className="flex justify-center">
            <div className="w-1 h-8 bg-gradient-to-b from-cyan-500 to-purple-500"></div>
          </div>

          {/* Gateway Layer */}
          <ServiceCard 
            serviceKey="gateway" 
            service={services.gateway} 
            isMain={true}
            isSelected={selectedService === 'gateway'}
            onClick={() => setSelectedService(selectedService === 'gateway' ? null : 'gateway')}
          />

          {/* Arrow Down */}
          <div className="flex justify-center">
            <div className="w-1 h-8 bg-gradient-to-b from-purple-500 to-blue-500"></div>
          </div>

          {/* Eureka Server */}
          <ServiceCard 
            serviceKey="eureka" 
            service={services.eureka} 
            isMain={true}
            isSelected={selectedService === 'eureka'}
            onClick={() => setSelectedService(selectedService === 'eureka' ? null : 'eureka')}
          />

          {/* Arrow Down - Branches */}
          <div className="flex justify-center">
            <svg width="400" height="60" className="overflow-visible">
              <line x1="200" y1="0" x2="200" y2="20" stroke="#3b82f6" strokeWidth="2"/>
              <line x1="200" y1="20" x2="50" y2="60" stroke="#10b981" strokeWidth="2"/>
              <line x1="200" y1="20" x2="200" y2="60" stroke="#f97316" strokeWidth="2"/>
              <line x1="200" y1="20" x2="350" y2="60" stroke="#ef4444" strokeWidth="2"/>
            </svg>
          </div>

          {/* Microservices Layer */}
          <div className="flex gap-6 justify-center flex-wrap">
            <ServiceCard 
              serviceKey="usuarios" 
              service={services.usuarios}
              isSelected={selectedService === 'usuarios'}
              onClick={() => setSelectedService(selectedService === 'usuarios' ? null : 'usuarios')}
            />
            <ServiceCard 
              serviceKey="indicadores" 
              service={services.indicadores}
              isSelected={selectedService === 'indicadores'}
              onClick={() => setSelectedService(selectedService === 'indicadores' ? null : 'indicadores')}
            />
            <ServiceCard 
              serviceKey="pedidos" 
              service={services.pedidos}
              isSelected={selectedService === 'pedidos'}
              onClick={() => setSelectedService(selectedService === 'pedidos' ? null : 'pedidos')}
            />
          </div>

          {/* Arrow to RabbitMQ */}
          <div className="flex justify-center">
            <div className="w-1 h-8 bg-gradient-to-b from-red-500 to-yellow-500"></div>
          </div>

          {/* RabbitMQ */}
          <ServiceCard 
            serviceKey="rabbitmq" 
            service={services.rabbitmq} 
            isMain={true}
            isSelected={selectedService === 'rabbitmq'}
            onClick={() => setSelectedService(selectedService === 'rabbitmq' ? null : 'rabbitmq')}
          />

        </div>

        {/* Tech Stack Summary */}
        <div className="mt-12 bg-slate-800 rounded-lg p-6 border border-slate-600 shadow-xl">
          <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
            <Database className="w-6 h-6" />
            Stack Tecnológico
          </h3>
          <div className="flex flex-wrap gap-4">
            {techStack.map((tech, idx) => (
              <div 
                key={idx} 
                className="bg-slate-700 px-4 py-2 rounded-lg hover:bg-slate-600 transition-colors"
              >
                <span className="text-slate-300">{tech.icon} {tech.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Flow Description */}
        <div className="mt-8 bg-gradient-to-r from-slate-800 to-slate-700 rounded-lg p-6 border border-slate-600 shadow-xl">
          <h3 className="text-2xl font-bold text-white mb-4">🔄 Flujo de Procesamiento</h3>
          <ol className="space-y-3 text-slate-300">
            {flowSteps.map((step, idx) => (
              <li key={idx} className="flex items-start gap-3 hover:text-white transition-colors">
                <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5 text-sm">
                  {idx + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* Key Features */}
        <div className="mt-8 bg-slate-800 rounded-lg p-6 border border-slate-600 shadow-xl">
          <h3 className="text-2xl font-bold text-white mb-4">✨ Características Clave</h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
              <div>
                <h4 className="text-white font-semibold">Procesamiento Asíncrono</h4>
                <p className="text-slate-400 text-sm">
                  RabbitMQ permite gestionar pedidos pesados sin bloquear la UI. Los usuarios reciben notificaciones cuando su reporte está listo.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
              <div>
                <h4 className="text-white font-semibold">Alta Disponibilidad</h4>
                <p className="text-slate-400 text-sm">
                  Eureka Server registra múltiples instancias de cada microservicio para balanceo de carga y tolerancia a fallos.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
              <div>
                <h4 className="text-white font-semibold">Seguridad Centralizada</h4>
                <p className="text-slate-400 text-sm">
                  Gateway valida JWT tokens antes de enrutar peticiones, garantizando que solo usuarios autenticados accedan a los microservicios.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
              <div>
                <h4 className="text-white font-semibold">Trazabilidad Completa</h4>
                <p className="text-slate-400 text-sm">
                  Cada pedido de indicadores queda registrado con usuario, fecha, filtros aplicados y estado de procesamiento.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="mt-6 text-center text-slate-400 text-sm">
          <p>💡 Haz clic en cualquier componente para ver más detalles técnicos</p>
        </div>
      </div>
    </div>
  );
};

export default MicroservicesArchitecture;