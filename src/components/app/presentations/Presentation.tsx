'use client'

import React, { JSX, useState } from "react";
import {
  Smartphone, Users, Car, FileText, MapPin, Camera,
  MessageSquare, Bell, CheckCircle, Clock, AlertTriangle,
  Shield, Database, Cloud, Calendar,
  TrendingUp, Server, Workflow, Mail, Globe, Package,
  Lock, UserCheck, LayoutDashboard, Edit, LucideIcon,
} from "lucide-react";
import { ReactNode, CSSProperties } from "react";

/* ─── TIPOS ────────────────────────────────────────────────────────────── */
interface ColorMap {
  navy: string;
  blue: string;
  accent: string;
  teal: string;
  green: string;
  amber: string;
  red: string;
  purple: string;
  gray: Record<number, string>;
}

const COLORS: ColorMap = {
  navy:   "#0f172a",
  blue:   "#1e40af",
  accent: "#3b82f6",
  teal:   "#0d9488",
  green:  "#059669",
  amber:  "#d97706",
  red:    "#dc2626",
  purple: "#7c3aed",
  gray: {
    50:  "#f8fafc",
    100: "#f1f5f9",
    200: "#e2e8f0",
    300: "#cbd5e1",
    600: "#475569",
    700: "#334155",
    900: "#0f172a",
  },
};

interface Tab {
  id: string;
  label: string;
  icon: LucideIcon;
}

const TABS: Tab[] = [
  { id: "resumen",        label: "Resumen",       icon: FileText },
  { id: "arquitectura",  label: "Arquitectura",   icon: Database },
  { id: "apis",          label: "APIs",           icon: Server },
  { id: "stack",         label: "Stack",          icon: Cloud },
  { id: "flujos",        label: "Flujos",         icon: Workflow },
  { id: "pantallas",     label: "Pantallas",      icon: Smartphone },
  { id: "estimacion",    label: "Estimación",     icon: Calendar },
  { id: "despliegue",    label: "Despliegue",     icon: Package },
  { id: "escalabilidad", label: "Escalabilidad",  icon: TrendingUp },
];

/* ─── RAÍZ ─────────────────────────────────────────────────────────────── */
export default function PresentacionMVP(): JSX.Element {
  const [activeTab, setActiveTab] = useState<string>("resumen");

  return (
    <div style={{ minHeight: "100vh", background: "#f8fafc", fontFamily: "'Segoe UI', system-ui, sans-serif" }}>

      {/* Header */}
      <header style={{
        background: `linear-gradient(135deg, ${COLORS.navy} 0%, ${COLORS.blue} 100%)`,
        padding: "2rem 1.5rem",
        borderBottom: "4px solid #3b82f6",
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 8 }}>
            <div style={{
              background: "rgba(59,130,246,0.2)", borderRadius: 12, padding: 12,
              border: "1px solid rgba(59,130,246,0.4)",
            }}>
              <Smartphone color="#60a5fa" size={32} />
            </div>
            <div>
              <h1 style={{ color: "white", fontSize: "1.8rem", fontWeight: 800, margin: 0 }}>
                MVP — Sistema de Gestión de Siniestros
              </h1>
              <p style={{ color: "#93c5fd", margin: 0, fontSize: "0.95rem" }}>
                Java Spring Boot · Expo/React Native · React ERP · WhatsApp API · SendGrid · Docker
              </p>
            </div>
          </div>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 16 }}>
            {[
              { label: "1 Mes de desarrollo",                  color: "#10b981" },
              { label: "Sin publicación en tiendas (APK directo)", color: "#f59e0b" },
              { label: "Backend + Frontend en servidor Docker",  color: "#6366f1" },
            ].map((b, i) => (
              <span key={i} style={{
                background: "rgba(255,255,255,0.1)", color: "white", fontSize: "0.8rem",
                padding: "4px 12px", borderRadius: 20, border: `1px solid ${b.color}40`,
                display: "flex", alignItems: "center", gap: 6,
              }}>
                <span style={{ width: 7, height: 7, borderRadius: "50%", background: b.color, display: "inline-block" }} />
                {b.label}
              </span>
            ))}
          </div>
        </div>
      </header>

      {/* Navegación */}
      <nav style={{
        background: "white", borderBottom: "1px solid #e2e8f0",
        position: "sticky", top: 0, zIndex: 100,
        boxShadow: "0 1px 8px rgba(0,0,0,0.06)",
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", overflowX: "auto", display: "flex" }}>
          {TABS.map(({ id, label, icon: Icon }) => (
            <button key={id} onClick={() => setActiveTab(id)} style={{
              display: "flex", alignItems: "center", gap: 8,
              padding: "14px 20px", border: "none", background: "transparent",
              cursor: "pointer", whiteSpace: "nowrap", fontWeight: 600, fontSize: "0.85rem",
              color: activeTab === id ? COLORS.blue : COLORS.gray[600],
              borderBottom: activeTab === id ? `3px solid ${COLORS.blue}` : "3px solid transparent",
              transition: "all 0.2s",
            }}>
              <Icon size={16} />
              {label}
            </button>
          ))}
        </div>
      </nav>

      {/* Contenido */}
      <main style={{ maxWidth: 1200, margin: "0 auto", padding: "2rem 1.5rem" }}>
        {activeTab === "resumen"        && <ResumenTab />}
        {activeTab === "arquitectura"   && <ArquitecturaTab />}
        {activeTab === "apis"           && <APIsTab />}
        {activeTab === "stack"          && <StackTab />}
        {activeTab === "flujos"         && <FlujosTab />}
        {activeTab === "pantallas"      && <PantallasTab />}
        {activeTab === "estimacion"     && <EstimacionTab />}
        {activeTab === "despliegue"     && <DespliegueTab />}
        {activeTab === "escalabilidad"  && <EscalabilidadTab />}
      </main>
    </div>
  );
}

/* ─── RESUMEN ──────────────────────────────────────────────────────────── */
interface SistemaItem {
  icon: LucideIcon;
  color: string;
  bg: string;
  titulo: string;
  subtitulo: string;
  items: string[];
}

interface StatItem {
  label: string;
  value: string;
  desc: string;
  color: string;
  icon: LucideIcon;
}

function ResumenTab(): JSX.Element {
  const sistemas: SistemaItem[] = [
    {
      icon: Globe, color: "#6366f1", bg: "#eef2ff",
      titulo: "Landing Page", subtitulo: "Carta de presentación",
      items: [
        "Página única de bienvenida",
        "Descripción del sistema",
        "CTA para descarga de APK / acceso al ERP",
        "Diseño enterprise, 1 ruta",
      ],
    },
    {
      icon: Smartphone, color: "#0d9488", bg: "#f0fdf9",
      titulo: "App Móvil", subtitulo: "Expo · React Native · TypeScript",
      items: [
        "Login + Register (pre-registro)",
        "Perfil (cambio de contraseña)",
        "Siniestro Auto → WhatsApp 🟢",
        "  Sub-tipos: Choque, Robo, Incendio...",
        "Asistencia Médica → Email 📧",
        "  Sub-tipos: Viaje, Salud, Delivery, Reembolso",
        "Cámara · GPS · Subida de imágenes",
      ],
    },
    {
      icon: Database, color: "#1e40af", bg: "#eff6ff",
      titulo: "ERP Web", subtitulo: "React · MUI · TypeScript",
      items: [
        "Login broker/operador",
        "Dashboard grid de usuarios",
        "Crear usuario (asignar pólizas)",
        "Editar usuario completo",
        "Perfil del operador",
        "Drawer de navegación lateral",
        "Context global de sesión",
      ],
    },
    {
      icon: Server, color: "#d97706", bg: "#fffbeb",
      titulo: "Backend", subtitulo: "Java Spring Boot ",
      items: [
        "Tabla usuarios + Tabla incidencias",
        "Caso de uso: Registrar Incidencia",
        "  → Auto: dispara WhatsApp API",
        "  → Salud: dispara SendGrid Email",
        "CRUD completo de usuarios",
        "API imágenes (procesa → devuelve URL)",
        "JWT Auth · R2DBC · PostgreSQL",
      ],
    },
  ];

  const stats: StatItem[] = [
    { label: "Tablas DB",      value: "2",       desc: "Usuarios + Incidencias",        color: COLORS.blue,   icon: Database },
    { label: "APIs Backend",   value: "12+",     desc: "Endpoints REST reactivos",      color: COLORS.teal,   icon: Server },
    { label: "Pantallas App",  value: "10+",     desc: "Login → Siniestros",            color: COLORS.purple, icon: Smartphone },
    { label: "Vistas ERP",     value: "5",       desc: "Login, Grid, CRUD, Perfil",     color: COLORS.amber,  icon: LayoutDashboard },
    { label: "Tiempo total",   value: "~1 mes",  desc: "Desarrollo paralelo",           color: COLORS.green,  icon: Clock },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      <Section title="📋 Resumen Ejecutivo">
        <p style={{ color: COLORS.gray[600], fontSize: "1.05rem", marginBottom: 8 }}>
          Sistema integral de gestión de siniestros construido en <strong>1 mes</strong>, sin publicación en tiendas.
          El APK se distribuye directamente y el frontend ERP + backend se despliegan con <strong>Docker en servidor</strong>.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20, marginTop: 24 }}>
          {sistemas.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={i} style={{ background: s.bg, borderRadius: 16, padding: 20, border: `2px solid ${s.color}30` }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                  <div style={{ background: `${s.color}20`, borderRadius: 10, padding: 8 }}>
                    <Icon color={s.color} size={22} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, color: COLORS.navy, fontSize: "1rem" }}>{s.titulo}</div>
                    <div style={{ color: COLORS.gray[600], fontSize: "0.75rem" }}>{s.subtitulo}</div>
                  </div>
                </div>
                <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                  {s.items.map((item, j) => {
                    const isIndented = item.startsWith("  ");
                    return (
                      <li key={j} style={{
                        fontSize: "0.82rem",
                        color: isIndented ? COLORS.gray[600] : COLORS.gray[700],
                        padding: "3px 0",
                        paddingLeft: isIndented ? 12 : 0,
                        borderLeft: isIndented ? `2px solid ${s.color}40` : "none",
                      }}>
                        {!isIndented && <span style={{ color: s.color, marginRight: 6 }}>▸</span>}
                        {item.trim()}
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </Section>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 16 }}>
        {stats.map((s, i) => {
          const Icon = s.icon;
          return (
            <div key={i} style={{
              background: "white", borderRadius: 14, padding: 20,
              boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
              borderTop: `4px solid ${s.color}`,
            }}>
              <Icon color={s.color} size={22} />
              <div style={{ fontSize: "2rem", fontWeight: 800, color: s.color, marginTop: 8 }}>{s.value}</div>
              <div style={{ fontWeight: 600, color: COLORS.navy, fontSize: "0.85rem" }}>{s.label}</div>
              <div style={{ color: COLORS.gray[600], fontSize: "0.75rem", marginTop: 4 }}>{s.desc}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ─── ARQUITECTURA ─────────────────────────────────────────────────────── */
interface LayerBox { icon: LucideIcon; label: string; sub: string; color: string; }
interface TableDef { label: string; fields: string; color: string; }
interface IntegDef  { icon: LucideIcon; color: string; label: string; desc: string; }

function ArquitecturaTab(): JSX.Element {
  const capas: LayerBox[] = [
    { icon: Globe,          label: "Landing Page",  sub: "React · 1 página",  color: "#6366f1" },
    { icon: Smartphone,     label: "App Móvil",     sub: "Expo · TypeScript",  color: "#0d9488" },
    { icon: LayoutDashboard,label: "ERP Web",       sub: "React + MUI",        color: "#1e40af" },
  ];

  const tablas: TableDef[] = [
    {
      label: "Tabla: usuarios",
      fields: "id, nombres, email, dni, telefono, password_hash, rol, estado, created_at",
      color: COLORS.blue,
    },
    {
      label: "Tabla: incidencias",
      fields: "id, usuario_id (FK), tipo [AUTO|SALUD], subtipo, descripcion, imagenes_urls[], ubicacion_gps, estado, created_at",
      color: COLORS.purple,
    },
  ];

  const integraciones: IntegDef[] = [
    { icon: MessageSquare, color: "#25d366", label: "WhatsApp Business API", desc: "Siniestros AUTO → mensaje automático al broker" },
    { icon: Mail,          color: "#4f46e5", label: "SendGrid Email API",    desc: "Asistencias SALUD → email HTML profesional al operador" },
  ];

  const controllers = [
    { label: "Auth Controller",  sub: "Login · JWT" },
    { label: "User Controller",  sub: "CRUD Usuarios" },
    { label: "Incident Controller", sub: "Registrar Siniestro" },
    { label: "Image Controller", sub: "Upload → URL" },
    { label: "WhatsApp Service", sub: "→ Auto" },
    { label: "SendGrid Service", sub: "→ Salud" },
  ];

  return (
    <Section title="🏗️ Arquitectura del Sistema">
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <div style={{ background: "linear-gradient(135deg, #f0f9ff, #e8f0fe)", borderRadius: 16, padding: 32 }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>

            <LayerLabel label="📱 Capa de Presentación" />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 12, width: "100%", maxWidth: 800 }}>
              {capas.map((c, i) => {
                const Icon = c.icon;
                return (
                  <div key={i} style={{
                    background: "white", borderRadius: 12, padding: 16, textAlign: "center",
                    border: `2px solid ${c.color}30`, boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                  }}>
                    <Icon color={c.color} size={30} />
                    <div style={{ fontWeight: 700, fontSize: "0.9rem", color: COLORS.navy, marginTop: 8 }}>{c.label}</div>
                    <div style={{ fontSize: "0.75rem", color: COLORS.gray[600] }}>{c.sub}</div>
                  </div>
                );
              })}
            </div>

            <Arrow />

            <LayerLabel label="⚙️ Capa de Negocio" />
            <div style={{
              background: "white", borderRadius: 12, padding: 24, width: "100%", maxWidth: 800,
              border: `2px solid ${COLORS.amber}40`, boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
            }}>
              <div style={{ textAlign: "center", marginBottom: 16 }}>
                <Server color={COLORS.amber} size={36} />
                <div style={{ fontWeight: 800, fontSize: "1.1rem", color: COLORS.navy, marginTop: 8 }}>
                  Java Spring Boot - 1 Microservicio
                </div>
                <div style={{ fontSize: "0.8rem", color: COLORS.gray[600] }}>
                   JWT Auth · REST APIs
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 10 }}>
                {controllers.map((c, i) => (
                  <div key={i} style={{
                    background: "#fffbeb", borderRadius: 8, padding: "10px 12px",
                    fontSize: "0.8rem", border: `1px solid ${COLORS.amber}30`,
                  }}>
                    <div style={{ fontWeight: 600, color: COLORS.navy }}>{c.label}</div>
                    <div style={{ color: COLORS.gray[600] }}>{c.sub}</div>
                  </div>
                ))}
              </div>
            </div>

            <Arrow />

            <LayerLabel label="💾 Capa de Datos" />
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, width: "100%", maxWidth: 800 }}>
              {tablas.map((t, i) => (
                <div key={i} style={{ background: "white", borderRadius: 12, padding: 16, border: `2px solid ${t.color}30` }}>
                  <div style={{ fontWeight: 700, color: t.color, marginBottom: 8 }}>{t.label}</div>
                  <div style={{ fontSize: "0.72rem", color: COLORS.gray[600], lineHeight: 1.6 }}>
                    {t.fields.split(", ").map((f, j) => <div key={j}>· {f}</div>)}
                  </div>
                </div>
              ))}
            </div>

            <Arrow />

            <LayerLabel label="🔗 Integraciones Externas" />
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, width: "100%", maxWidth: 800 }}>
              {integraciones.map((integ, i) => (
                <IntegCard key={i} icon={integ.icon} color={integ.color} label={integ.label} desc={integ.desc} />
              ))}
            </div>
          </div>
        </div>

        <div style={{ background: "#f0fdf4", borderRadius: 14, padding: 20, border: "2px solid #86efac" }}>
          <h3 style={{ color: "#166534", fontWeight: 700, marginTop: 0 }}>
            📐 Decisión de Diseño: Tabla Incidencias Normalizada
          </h3>
          <p style={{ color: COLORS.gray[700], margin: "0 0 12px" }}>
            1 sola tabla con discriminador <code>tipo</code> en lugar de 2 tablas separadas:
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            <div style={{ background: "white", borderRadius: 10, padding: 14 }}>
              <div style={{ fontWeight: 600, color: "#166534", marginBottom: 8 }}>✅ Ventajas</div>
              {["Consultas unificadas", "Un solo repositorio", "Fácil agregar nuevos tipos", "Menos joins"].map((v, i) => (
                <div key={i} style={{ fontSize: "0.82rem", color: COLORS.gray[700], padding: "2px 0" }}>· {v}</div>
              ))}
            </div>
            <div style={{ background: "white", borderRadius: 10, padding: 14 }}>
              <div style={{ fontWeight: 600, color: COLORS.amber, marginBottom: 8 }}>🔑 Lógica del caso de uso</div>
              <code style={{ fontSize: "0.78rem", color: COLORS.gray[700], lineHeight: 1.8, display: "block" }}>
                if (tipo == AUTO) {"{"}<br />
                &nbsp;&nbsp;→ WhatsApp API<br />
                {"}"}<br />
                if (tipo == SALUD) {"{"}<br />
                &nbsp;&nbsp;→ SendGrid Email<br />
                {"}"}
              </code>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ─── APIs ─────────────────────────────────────────────────────────────── */
type HttpMethod = "POST" | "GET" | "PUT" | "DELETE";

interface ApiDef {
  metodo: HttpMethod;
  endpoint: string;
  desc: string;
  req: string;
  res: string;
  color: string;
}

function APIsTab(): JSX.Element {
  const apis: ApiDef[] = [
    { metodo: "POST",   endpoint: "/api/auth/login",        desc: "Login cliente/operador → JWT token",                                    req: "{ email, password }",                              res: "{ token, user, rol }",                 color: COLORS.blue   },
    { metodo: "POST",   endpoint: "/api/auth/register",     desc: "Pre-registro del cliente desde la app móvil",                          req: "{ nombres, email, dni, telefono, password }",      res: "{ userId, estado: 'pendiente' }",      color: COLORS.teal   },
    { metodo: "GET",    endpoint: "/api/users",             desc: "Listar usuarios (ERP) — paginación, filtros, búsqueda",               req: "?page=0&size=10&search=&estado=",                  res: "{ content[], total, page }",           color: COLORS.purple },
    { metodo: "GET",    endpoint: "/api/users/{id}",        desc: "Obtener usuario por ID",                                              req: "Authorization: Bearer token",                      res: "{ user, incidencias[] }",              color: COLORS.purple },
    { metodo: "POST",   endpoint: "/api/users",             desc: "Crear usuario completo (ERP) con póliza y datos",                    req: "{ nombres, email, dni, telefono, rol, poliza }",   res: "{ userId, estado }",                   color: COLORS.green  },
    { metodo: "PUT",    endpoint: "/api/users/{id}",        desc: "Editar usuario — datos, estado, contraseña",                         req: "{ nombres, email, estado, password? }",            res: "{ user actualizado }",                 color: COLORS.amber  },
    { metodo: "DELETE", endpoint: "/api/users/{id}",        desc: "Eliminar / desactivar usuario",                                      req: "Authorization: Bearer token",                      res: "{ deleted: true }",                    color: COLORS.red    },
    { metodo: "POST",   endpoint: "/api/incidents",         desc: "Registrar siniestro — AUTO→WhatsApp · SALUD→Email",                  req: "{ tipo, subtipo, descripcion, imageUrls[], gps }", res: "{ incidentId, codigo, notificado }",   color: COLORS.teal   },
    { metodo: "GET",    endpoint: "/api/incidents",         desc: "Listar siniestros del usuario autenticado",                          req: "Authorization: Bearer token",                      res: "{ incidents[], total }",               color: COLORS.blue   },
    { metodo: "POST",   endpoint: "/api/images/upload",     desc: "Subir imagen → procesar → devolver URL pública para UI",            req: "multipart/form-data",                              res: "{ url: 'https://cdn.../img.jpg' }",    color: COLORS.purple },
    { metodo: "GET",    endpoint: "/api/users/me",          desc: "Perfil del usuario autenticado",                                     req: "Authorization: Bearer token",                      res: "{ user completo }",                    color: COLORS.gray[600] },
    { metodo: "PUT",    endpoint: "/api/users/me/password", desc: "Cambiar contraseña desde perfil",                                    req: "{ passwordActual, passwordNueva }",                 res: "{ success: true }",                    color: COLORS.gray[600] },
  ];

  const BADGE: Record<HttpMethod, string> = {
    POST:   "#0d9488",
    GET:    "#1e40af",
    PUT:    "#d97706",
    DELETE: "#dc2626",
  };

  return (
    <Section title="🔌 APIs del Backend (12 Endpoints)">
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {apis.map((api, i) => (
          <div key={i} style={{
            background: "white", borderRadius: 12, padding: "14px 18px",
            boxShadow: "0 1px 6px rgba(0,0,0,0.06)", borderLeft: `4px solid ${api.color}`,
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6, flexWrap: "wrap" }}>
              <span style={{
                background: BADGE[api.metodo], color: "white", fontSize: "0.72rem",
                fontWeight: 700, padding: "3px 10px", borderRadius: 6,
                fontFamily: "monospace", letterSpacing: 1,
              }}>{api.metodo}</span>
              <code style={{ fontWeight: 700, fontSize: "0.88rem", color: COLORS.navy }}>{api.endpoint}</code>
            </div>
            <p style={{ color: COLORS.gray[600], fontSize: "0.83rem", margin: "0 0 8px" }}>{api.desc}</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
              {([["Request", api.req], ["Response", api.res]] as [string, string][]).map(([lbl, val], j) => (
                <div key={j}>
                  <div style={{ fontSize: "0.7rem", fontWeight: 600, color: COLORS.gray[600], marginBottom: 2 }}>{lbl}:</div>
                  <code style={{
                    display: "block", background: COLORS.gray[100],
                    padding: "6px 10px", borderRadius: 6, fontSize: "0.72rem", color: COLORS.gray[700],
                  }}>{val}</code>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginTop: 20 }}>
        <CalloutBox icon={MessageSquare} color="#25d366" title="WhatsApp Business API — Siniestro AUTO">
          <ol style={{ margin: 0, paddingLeft: 18, fontSize: "0.82rem", color: COLORS.gray[700] }}>
            <li>Cliente envía POST /api/incidents con tipo=AUTO</li>
            <li>Backend guarda en tabla incidencias</li>
            <li>WhatsApp Service dispara mensaje al broker</li>
            <li>Responde con código único de siniestro</li>
          </ol>
        </CalloutBox>
        <CalloutBox icon={Mail} color="#4f46e5" title="SendGrid Email — Asistencia SALUD">
          <ol style={{ margin: 0, paddingLeft: 18, fontSize: "0.82rem", color: COLORS.gray[700] }}>
            <li>Cliente envía POST /api/incidents con tipo=SALUD</li>
            <li>Backend guarda incidencia con subtipo</li>
            <li>SendGrid Service envía email HTML al operador</li>
            <li>Responde con código único de solicitud</li>
          </ol>
        </CalloutBox>
      </div>
    </Section>
  );
}

/* ─── STACK ────────────────────────────────────────────────────────────── */
interface TechItem { name: string; cat: string; ver: string; color: string; }
interface StackSection { label: string; icon: LucideIcon; iconColor: string; techs: TechItem[]; }

function StackTab(): JSX.Element {
  const sections: StackSection[] = [
    {
      label: "Backend", icon: Server, iconColor: COLORS.amber,
      techs: [
        { name: "Java 17+",            cat: "Lenguaje",             ver: "LTS",       color: "#dc2626" },
        { name: "Spring Boot 3.2",     cat: "Framework",            ver: "3.2.x",     color: COLORS.amber },
        // { name: "Spring WebFlux",      cat: "Programación Reactiva",ver: "Reactor 3", color: COLORS.green },
        { name: "Spring Security",     cat: "Auth + JWT",           ver: "6.2+",      color: COLORS.red   },
        { name: "PostgreSQL",          cat: "Base de Datos",        ver: "15+",       color: "#336791"    },
        { name: "R2DBC",               cat: "Driver Reactivo",      ver: "Latest",    color: COLORS.teal  },
        { name: "WhatsApp Business",   cat: "API Mensajería",       ver: "Official",  color: "#25d366"    },
        { name: "SendGrid",            cat: "Email Service",        ver: "4.10+",     color: "#4f46e5"    },
        { name: "Lombok",              cat: "Utilidades",           ver: "Latest",    color: COLORS.gray[600] },
      ],
    },
    {
      label: "App Móvil", icon: Smartphone, iconColor: COLORS.teal,
      techs: [
        { name: "Expo SDK 51",              cat: "Framework Mobile",  ver: "~51.0",  color: COLORS.teal   },
        { name: "React Native 0.74",        cat: "Mobile Core",       ver: "0.74.5", color: "#61dafb"     },
        { name: "TypeScript",               cat: "Lenguaje",          ver: "~5.3",   color: "#3178c6"     },
        { name: "Expo Router",              cat: "Navegación",        ver: "~3.5",   color: COLORS.teal   },
        { name: "Redux Toolkit",            cat: "Estado global",     ver: "2.0+",   color: COLORS.purple },
        { name: "Expo Camera/ImagePicker",  cat: "Cámara + Galería",  ver: "~15.0",  color: COLORS.gray[600] },
        { name: "Expo Linear Gradient",     cat: "UI",                ver: "~13.0",  color: COLORS.gray[600] },
        { name: "Axios",                    cat: "HTTP Client",       ver: "1.6+",   color: "#5a29e4"     },
      ],
    },
    {
      label: "ERP Web", icon: LayoutDashboard, iconColor: COLORS.blue,
      techs: [
        { name: "React 18",         cat: "Framework",          ver: "18+",     color: "#61dafb" },
        { name: "TypeScript",       cat: "Lenguaje",           ver: "5+",      color: "#3178c6" },
        { name: "Material-UI v5",   cat: "UI Components",      ver: "5+",      color: COLORS.blue },
        { name: "MUI DataGrid",     cat: "Grid de Usuarios",   ver: "6+",      color: COLORS.blue },
        { name: "React Router",     cat: "Routing",            ver: "6+",      color: "#f44250" },
        { name: "React Context API",cat: "Estado sesión",      ver: "Built-in",color: "#61dafb" },
        { name: "Axios",            cat: "HTTP Client",        ver: "1.6+",    color: "#5a29e4" },
      ],
    },
    {
      label: "Landing Page", icon: Globe, iconColor: "#6366f1",
      techs: [
        { name: "React / HTML", cat: "Framework",  ver: "18 / 5",  color: "#61dafb" },
        { name: "Tailwind CSS", cat: "Estilos",    ver: "3+",      color: "#06b6d4" },
        { name: "1 Página",     cat: "Ruta única", ver: "/",       color: "#6366f1" },
      ],
    },
    {
      label: "Infraestructura", icon: Package, iconColor: COLORS.gray[700],
      techs: [
        { name: "Docker",                cat: "Containerización",   ver: "Latest", color: "#2496ed" },
        { name: "Docker Compose",        cat: "Orquestación local", ver: "v3+",    color: "#2496ed" },
        { name: "EAS Build",             cat: "APK sin tienda",     ver: "Latest", color: COLORS.teal },
        { name: "PostgreSQL (container)",cat: "DB en servidor",     ver: "15+",    color: "#336791" },
      ],
    },
  ];

  return (
    <Section title="🛠️ Stack Tecnológico Completo">
      <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
        {sections.map((sec, i) => {
          const Icon = sec.icon;
          return (
            <div key={i}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                <Icon color={sec.iconColor} size={22} />
                <h3 style={{ margin: 0, color: COLORS.navy, fontWeight: 700 }}>{sec.label}</h3>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 12 }}>
                {sec.techs.map((t, j) => (
                  <div key={j} style={{
                    background: "white", borderRadius: 10, padding: 14,
                    boxShadow: "0 1px 6px rgba(0,0,0,0.06)", borderTop: `3px solid ${t.color}`,
                  }}>
                    <div style={{ fontWeight: 700, color: COLORS.navy, fontSize: "0.88rem" }}>{t.name}</div>
                    <div style={{ color: COLORS.gray[600], fontSize: "0.75rem", margin: "3px 0" }}>{t.cat}</div>
                    <span style={{
                      display: "inline-block", fontSize: "0.7rem", fontFamily: "monospace",
                      background: `${t.color}15`, color: t.color, padding: "2px 8px", borderRadius: 4,
                    }}>{t.ver}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

/* ─── FLUJOS ───────────────────────────────────────────────────────────── */
interface FlowStep {
  icon: LucideIcon;
  text: string;
}

interface FlowDef {
  title: string;
  color: string;
  steps: FlowStep[];
}

type FlowKey = "registro" | "siniestro_auto" | "siniestro_salud" | "erp_operador";

function FlujosTab(): JSX.Element {
  const [sel, setSel] = useState<FlowKey | "">("");

  const flujos: Record<FlowKey, FlowDef> = {
    registro: {
      title: "Pre-registro Cliente (App Móvil)",
      color: COLORS.teal,
      steps: [
        { icon: Smartphone,    text: "Descarga el APK directamente (sin tienda)" },
        { icon: Users,         text: "Abre la app → pantalla de Login" },
        { icon: UserCheck,     text: "Toca 'Crear cuenta'" },
        { icon: FileText,      text: "Paso 1: nombres, apellidos, DNI, teléfono" },
        { icon: Lock,          text: "Paso 2: email, contraseña, confirmar, aceptar términos" },
        { icon: CheckCircle,   text: "Paso 3: Confirmación — estado 'pendiente'" },
        { icon: Bell,          text: "POST /api/auth/register → guarda en tabla usuarios" },
        { icon: AlertTriangle, text: "Espera que el operador active la cuenta en el ERP" },
      ],
    },
    siniestro_auto: {
      title: "Siniestro Auto → WhatsApp",
      color: "#25d366",
      steps: [
        { icon: Smartphone,    text: "Cliente hace login en la app" },
        { icon: Car,           text: "Toca 'Siniestro Auto'" },
        { icon: FileText,      text: "Selecciona compañía aseguradora" },
        { icon: FileText,      text: "Selecciona sub-tipo: Choque / Robo / Incendio / Daños / Otros" },
        { icon: Camera,        text: "Toma foto del brevete y evidencias" },
        { icon: MapPin,        text: "Captura GPS automático" },
        { icon: Cloud,         text: "POST /api/images/upload → backend devuelve URLs" },
        { icon: CheckCircle,   text: "POST /api/incidents (tipo=AUTO, subtipo, urls, gps)" },
        { icon: Database,      text: "Backend guarda incidencia en PostgreSQL" },
        { icon: MessageSquare, text: "WhatsApp Service dispara mensaje automático al broker" },
        { icon: Bell,          text: "Operador recibe en WhatsApp corporativo" },
        { icon: Smartphone,    text: "Cliente ve código único de siniestro" },
      ],
    },
    siniestro_salud: {
      title: "Asistencia Médica → Email",
      color: "#4f46e5",
      steps: [
        { icon: Smartphone,  text: "Cliente hace login en la app" },
        { icon: Shield,      text: "Toca 'Asistencia Médica'" },
        { icon: FileText,    text: "Selecciona sub-tipo: Constancia Viaje / Salud / Delivery / Reembolso" },
        { icon: FileText,    text: "Escribe descripción del caso (30–500 caracteres)" },
        { icon: Camera,      text: "Adjunta fotos (obligatorio en Reembolso)" },
        { icon: Cloud,       text: "POST /api/images/upload → backend devuelve URLs" },
        { icon: CheckCircle, text: "POST /api/incidents (tipo=SALUD, subtipo, urls, descripción)" },
        { icon: Database,    text: "Backend guarda solicitud en PostgreSQL" },
        { icon: Mail,        text: "SendGrid Service envía email HTML profesional al operador" },
        { icon: Bell,        text: "Operador recibe email con toda la info del caso" },
        { icon: Smartphone,  text: "Cliente ve código único de solicitud médica" },
      ],
    },
    erp_operador: {
      title: "Operador en ERP Web",
      color: COLORS.blue,
      steps: [
        { icon: LayoutDashboard, text: "Operador accede al ERP Web desde el servidor (Docker)" },
        { icon: Lock,            text: "Login con credenciales de operador" },
        { icon: Users,           text: "Ve el Dashboard Grid de usuarios" },
        { icon: AlertTriangle,   text: "Identifica usuarios con estado 'pendiente'" },
        { icon: Edit,            text: "Clic en 'Editar usuario' → formulario completo" },
        { icon: CheckCircle,     text: "Asigna datos adicionales, cambia estado a 'activo'" },
        { icon: Database,        text: "PUT /api/users/{id} → backend actualiza" },
        { icon: Bell,            text: "El cliente ya puede registrar siniestros" },
      ],
    },
  };

  const selectedFlow = sel ? flujos[sel] : null;

  return (
    <Section title="🔄 Flujos del Sistema">
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 12, marginBottom: 24 }}>
        {(Object.entries(flujos) as [FlowKey, FlowDef][]).map(([key, flow]) => (
          <button key={key} onClick={() => setSel(sel === key ? "" : key)} style={{
            padding: "16px 20px", borderRadius: 12,
            border: `2px solid ${sel === key ? flow.color : "#e2e8f0"}`,
            background: sel === key ? `${flow.color}12` : "white",
            cursor: "pointer", textAlign: "left", transition: "all 0.2s",
            fontWeight: 700, color: sel === key ? flow.color : COLORS.gray[700],
          }}>
            {flow.title}
          </button>
        ))}
      </div>

      {selectedFlow && (
        <div style={{ background: "white", borderRadius: 14, padding: 24, boxShadow: "0 2px 12px rgba(0,0,0,0.07)" }}>
          <h3 style={{ color: selectedFlow.color, fontWeight: 700, marginTop: 0 }}>{selectedFlow.title}</h3>
          <div style={{ position: "relative", paddingLeft: 24 }}>
            <div style={{
              position: "absolute", left: 18, top: 0, bottom: 0,
              width: 2, background: `${selectedFlow.color}30`,
            }} />
            {selectedFlow.steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 12 }}>
                  <div style={{
                    width: 36, height: 36, borderRadius: "50%", flexShrink: 0, zIndex: 1,
                    background: selectedFlow.color,
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <Icon color="white" size={18} />
                  </div>
                  <div style={{
                    background: COLORS.gray[50], borderRadius: 10, padding: "10px 16px",
                    fontSize: "0.88rem", color: COLORS.gray[700], flex: 1,
                    border: `1px solid ${COLORS.gray[200]}`,
                  }}>
                    {step.text}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {!selectedFlow && (
        <div style={{ textAlign: "center", color: COLORS.gray[600], padding: 40 }}>
          Selecciona un flujo para ver el detalle paso a paso
        </div>
      )}
    </Section>
  );
}

/* ─── PANTALLAS ────────────────────────────────────────────────────────── */
interface PantallaItem { n: number; titulo: string; desc: string; }
interface SistemaPanel {
  icon: LucideIcon; color: string; bg: string;
  titulo: string; sub: string;
  pantallas: PantallaItem[];
  extras?: string[];
}

function PantallasTab(): JSX.Element {
  const sistemas: SistemaPanel[] = [
    {
      icon: Globe, color: "#6366f1", bg: "#eef2ff",
      titulo: "Landing Page", sub: "Carta de presentación · 1 ruta",
      pantallas: [
        { n: 1, titulo: "Home Page", desc: "Hero, descripción del sistema, CTA para descargar APK o acceder al ERP. 1 sola página." },
      ],
    },
    {
      icon: Smartphone, color: "#0d9488", bg: "#f0fdf9",
      titulo: "App Móvil", sub: "Expo · React Native · TypeScript",
      pantallas: [
        { n: 1,  titulo: "Login",                              desc: "Email, contraseña, show/hide, gradiente azul enterprise" },
        { n: 2,  titulo: "Register — Paso 1",                  desc: "Datos personales: nombres, apellidos, DNI, teléfono" },
        { n: 3,  titulo: "Register — Paso 2",                  desc: "Credenciales + términos: email, contraseña, confirmar" },
        { n: 4,  titulo: "Register — Paso 3",                  desc: "Confirmación: cuenta pendiente de validación por operador" },
        { n: 5,  titulo: "Home Dashboard",                     desc: "Cards de servicio: Siniestro Auto y Asistencia Médica" },
        { n: 6,  titulo: "Siniestro Auto — Aseguradora",       desc: "7 compañías en grid visual" },
        { n: 7,  titulo: "Siniestro Auto — Sub-tipo + Datos",  desc: "Sub-tipos: Choque, Robo, Incendio, Daños, Otros. Licencia + foto brevete" },
        { n: 8,  titulo: "Siniestro Auto — Confirmación",      desc: "Código único + botón WhatsApp con mensaje pre-cargado" },
        { n: 9,  titulo: "Asistencia Médica — Servicio",       desc: "4 sub-tipos: Constancia Viaje, Salud, Delivery, Reembolso" },
        { n: 10, titulo: "Asistencia Médica — Formulario",     desc: "Descripción 30–500 chars + fotos (obligatorio en Reembolso)" },
        { n: 11, titulo: "Asistencia Médica — Confirmación",   desc: "Código único + mensaje email enviado al operador" },
        { n: 12, titulo: "Perfil",                             desc: "Ver datos personales + cambio de contraseña" },
      ],
    },
    {
      icon: LayoutDashboard, color: "#1e40af", bg: "#eff6ff",
      titulo: "ERP Web", sub: "React · MUI · TypeScript",
      pantallas: [
        { n: 1, titulo: "Login Operador/Broker",   desc: "Credenciales enterprise, Context global de sesión" },
        { n: 2, titulo: "Dashboard Grid Usuarios", desc: "MUI DataGrid — paginación, búsqueda, filtros, métricas" },
        { n: 3, titulo: "Crear Usuario",           desc: "Formulario completo — datos + póliza + propiedades" },
        { n: 4, titulo: "Editar Usuario",          desc: "Carga datos existentes — edita estado, pólizas, datos" },
        { n: 5, titulo: "Perfil Operador",         desc: "Datos del operador + cambio de contraseña" },
      ],
      extras: [
        "Drawer de navegación lateral persistente",
        "React Context API para sesión global",
        "Rutas protegidas (PrivateRoute)",
      ],
    },
  ];

  return (
    <Section title="📱 Pantallas del Sistema">
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        {sistemas.map((s, i) => {
          const Icon = s.icon;
          return (
            <div key={i} style={{ background: s.bg, borderRadius: 16, padding: 24, border: `2px solid ${s.color}25` }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                <div style={{ background: `${s.color}20`, borderRadius: 10, padding: 10 }}>
                  <Icon color={s.color} size={24} />
                </div>
                <div>
                  <div style={{ fontWeight: 800, fontSize: "1.15rem", color: COLORS.navy }}>{s.titulo}</div>
                  <div style={{ color: COLORS.gray[600], fontSize: "0.8rem" }}>{s.sub}</div>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {s.pantallas.map((p, j) => (
                  <div key={j} style={{
                    background: "white", borderRadius: 10, padding: "12px 16px",
                    borderLeft: `4px solid ${s.color}`,
                    display: "flex", gap: 14, alignItems: "flex-start",
                  }}>
                    <div style={{
                      width: 28, height: 28, borderRadius: "50%", flexShrink: 0,
                      background: s.color, color: "white",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontWeight: 700, fontSize: "0.78rem",
                    }}>{p.n}</div>
                    <div>
                      <div style={{ fontWeight: 600, color: COLORS.navy, fontSize: "0.88rem" }}>{p.titulo}</div>
                      <div style={{ color: COLORS.gray[600], fontSize: "0.8rem", marginTop: 2 }}>{p.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              {s.extras && (
                <div style={{ marginTop: 12, padding: "10px 14px", background: `${s.color}10`, borderRadius: 8 }}>
                  {s.extras.map((e, k) => (
                    <div key={k} style={{ fontSize: "0.8rem", color: s.color, fontWeight: 600 }}>★ {e}</div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </Section>
  );
}

/* ─── ESTIMACIÓN ───────────────────────────────────────────────────────── */
interface SemanaItem { semana: string; label: string; color: string; items: string[]; }

function EstimacionTab(): JSX.Element {
  const semanas: SemanaItem[] = [
    {
      semana: "Semana 1", label: "Backend Core", color: COLORS.amber,
      items: [
        "Setup Spring Boot WebFlux + PostgreSQL + R2DBC",
        "Entidades: usuarios + incidencias (normalizado)",
        "Auth: POST /api/auth/login + JWT",
        "POST /api/auth/register (pre-registro)",
        "GET | POST | PUT | DELETE /api/users (CRUD completo)",
      ],
    },
    {
      semana: "Semana 2", label: "Backend Integraciones + App Móvil Base", color: COLORS.teal,
      items: [
        "POST /api/incidents (lógica AUTO→WhatsApp / SALUD→SendGrid)",
        "POST /api/images/upload (procesa → devuelve URL)",
        "GET /api/incidents + GET /api/users/me",
        "PUT /api/users/me/password",
        "App: Login + Register (3 pasos) + Home",
      ],
    },
    {
      semana: "Semana 3", label: "App Móvil Flujos + ERP Web", color: COLORS.blue,
      items: [
        "App: Flujo completo Siniestro Auto (3 pantallas)",
        "App: Flujo completo Asistencia Médica (3 pantallas)",
        "App: Perfil + cambio de contraseña",
        "ERP: Login + Dashboard Grid Usuarios",
        "ERP: Drawer + React Context sesión",
      ],
    },
    {
      semana: "Semana 4", label: "ERP Completo + Landing + Despliegue", color: COLORS.purple,
      items: [
        "ERP: Crear Usuario + Editar Usuario + Perfil operador",
        "Landing Page (carta de presentación)",
        "Docker: Backend + ERP Web + PostgreSQL en servidor",
        "EAS Build: APK de producción para distribución directa",
        "Testing integral + ajustes finales",
      ],
    },
  ];

  return (
    <Section title="📅 Estimación — 1 Mes de Desarrollo">
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
        {semanas.map((s, i) => (
          <div key={i} style={{ background: "white", borderRadius: 14, overflow: "hidden", boxShadow: "0 2px 10px rgba(0,0,0,0.06)" }}>
            <div style={{ background: s.color, padding: "14px 20px" }}>
              <div style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.78rem", fontWeight: 600 }}>{s.semana}</div>
              <div style={{ color: "white", fontWeight: 800, fontSize: "1rem" }}>{s.label}</div>
            </div>
            <div style={{ padding: "16px 20px" }}>
              {s.items.map((item, j) => (
                <div key={j} style={{
                  fontSize: "0.82rem", color: COLORS.gray[700], padding: "5px 0",
                  borderBottom: j < s.items.length - 1 ? `1px solid ${COLORS.gray[100]}` : "none",
                  display: "flex", gap: 8,
                }}>
                  <span style={{ color: s.color, flexShrink: 0 }}>▸</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div style={{
        marginTop: 24, background: "linear-gradient(135deg, #f0fdf4, #e0f2fe)",
        borderRadius: 14, padding: 24, border: "2px solid #86efac",
      }}>
        <h3 style={{ color: "#166534", fontWeight: 700, marginTop: 0 }}>✅ Supuestos del Cronograma</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 12 }}>
          {[
            "Desarrollo paralelo Backend + App Móvil",
            "Sin publicación en Google Play ni App Store",
            "APK distribuido directamente por link EAS",
            "Backend + ERP en servidor con Docker",
            "Un solo microservicio (sin Eureka/Gateway)",
            "Base de datos: 2 tablas normalizadas",
          ].map((item, i) => (
            <div key={i} style={{
              background: "white", borderRadius: 8, padding: "10px 14px",
              fontSize: "0.82rem", color: COLORS.gray[700],
              display: "flex", gap: 8, alignItems: "center",
            }}>
              <CheckCircle color="#059669" size={16} />
              {item}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ─── DESPLIEGUE ───────────────────────────────────────────────────────── */
interface DockerService { service: string; color: string; port: string; desc: string; }
interface DockerCard    { label: string; desc: string; color: string; icon: LucideIcon; }
interface AccessRow     { label: string; url: string; desc: string; }

function DespliegueTab(): JSX.Element {
  const dockerServices: DockerService[] = [
    { service: "postgres",  color: "#60a5fa", port: "5432:5432", desc: "Base de datos" },
    { service: "backend",   color: "#34d399", port: "8080:8080", desc: "Spring Boot WebFlux" },
    { service: "erp-web",   color: "#f59e0b", port: "3000:80",   desc: "React + Nginx" },
    { service: "landing",   color: "#a78bfa", port: "80:80",     desc: "Landing Page + Nginx" },
  ];

  const dockerCards: DockerCard[] = [
    { label: "PostgreSQL",           desc: "Datos persistidos en volumen Docker", color: "#336791",    icon: Database         },
    { label: "Backend Spring Boot",  desc: "Puerto 8080 — APIs REST reactivas",    color: COLORS.amber, icon: Server           },
    { label: "ERP Web (React+Nginx)",desc: "Puerto 3000 — Operadores/Brokers",     color: COLORS.blue,  icon: LayoutDashboard  },
    { label: "Landing Page",         desc: "Puerto 80 — Carta de presentación",    color: "#6366f1",    icon: Globe            },
  ];

  const accesos: AccessRow[] = [
    { label: "Landing Page",  url: "http://servidor.com/",         desc: "Carta de presentación pública" },
    { label: "ERP Web",       url: "http://servidor.com:3000/",    desc: "Acceso operadores/brokers" },
    { label: "API Backend",   url: "http://servidor.com:8080/api/",desc: "Consumida por App + ERP" },
    { label: "App Móvil",     url: "APK distribuido directamente", desc: "Sin URL — instalación manual" },
  ];

  return (
    <Section title="🚀 Estrategia de Despliegue">
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>

        {/* App Móvil */}
        <div style={{ background: "#f0fdf9", borderRadius: 14, padding: 24, border: "2px solid #99f6e4" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
            <Smartphone color="#0d9488" size={28} />
            <h3 style={{ margin: 0, color: "#0f766e", fontWeight: 700 }}>App Móvil — EAS Build (Sin Tienda)</h3>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 12 }}>
            {[
              {
                titulo: "🛠️ Proceso de Build",
                lista: ["npx expo prebuild --clean", "eas build --platform android --profile production", "EAS genera APK en la nube (~15 min)", "Descargar APK desde expo.dev"],
                ordered: true,
              },
              {
                titulo: "📲 Distribución",
                lista: ["Enviar APK por WhatsApp / Email / Drive", "Cliente activa 'Fuentes desconocidas'", "Instala directamente el APK", "Sin revisión de tienda = más rápido"],
                ordered: false,
              },
              {
                titulo: "✅ Ventajas",
                lista: ["Gratis con EAS (plan free)", "Sin burocracia de tienda", "Actualizaciones inmediatas", "Control total de distribución"],
                ordered: false,
              },
            ].map((col, i) => (
              <div key={i} style={{ background: "white", borderRadius: 10, padding: 16 }}>
                <div style={{ fontWeight: 600, color: COLORS.navy, marginBottom: 10 }}>{col.titulo}</div>
                {col.ordered ? (
                  <ol style={{ margin: 0, paddingLeft: 18, fontSize: "0.82rem", color: COLORS.gray[700], lineHeight: 1.8 }}>
                    {col.lista.map((item, j) => <li key={j}>{item}</li>)}
                  </ol>
                ) : (
                  <ul style={{ margin: 0, paddingLeft: 18, fontSize: "0.82rem", color: COLORS.gray[700], lineHeight: 1.8 }}>
                    {col.lista.map((item, j) => <li key={j}>{item}</li>)}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Docker */}
        <div style={{ background: "#eff6ff", borderRadius: 14, padding: 24, border: "2px solid #bfdbfe" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
            <Package color={COLORS.blue} size={28} />
            <h3 style={{ margin: 0, color: COLORS.blue, fontWeight: 700 }}>Backend + ERP Web — Docker en Servidor</h3>
          </div>
          <div style={{
            background: "#0f172a", borderRadius: 12, padding: 20,
            fontFamily: "monospace", fontSize: "0.8rem", color: "#e2e8f0", marginBottom: 16,
          }}>
            <div style={{ color: "#94a3b8", marginBottom: 8 }}># docker-compose.yml</div>
            {dockerServices.map((s, i) => (
              <div key={i} style={{ marginBottom: 6 }}>
                <span style={{ color: s.color }}>  {s.service}:</span>
                <span style={{ color: "#94a3b8" }}> # {s.desc} — ports: {s.port}</span>
              </div>
            ))}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 12 }}>
            {dockerCards.map((c, i) => {
              const Icon = c.icon;
              return (
                <div key={i} style={{ background: "white", borderRadius: 10, padding: 14, borderLeft: `3px solid ${c.color}` }}>
                  <Icon color={c.color} size={20} />
                  <div style={{ fontWeight: 600, color: COLORS.navy, fontSize: "0.85rem", marginTop: 6 }}>{c.label}</div>
                  <div style={{ color: COLORS.gray[600], fontSize: "0.78rem", marginTop: 4 }}>{c.desc}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Accesos */}
        <div style={{ background: "#fefce8", borderRadius: 14, padding: 20, border: "2px solid #fde68a" }}>
          <h3 style={{ margin: "0 0 12px", color: COLORS.amber, fontWeight: 700 }}>🌐 URLs de Acceso en Servidor</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 10 }}>
            {accesos.map((a, i) => (
              <div key={i} style={{ background: "white", borderRadius: 10, padding: 14 }}>
                <div style={{ fontWeight: 600, color: COLORS.navy, fontSize: "0.85rem" }}>{a.label}</div>
                <code style={{ display: "block", fontSize: "0.75rem", color: COLORS.teal, margin: "4px 0" }}>{a.url}</code>
                <div style={{ color: COLORS.gray[600], fontSize: "0.75rem" }}>{a.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ─── ESCALABILIDAD ────────────────────────────────────────────────────── */
interface FutureCard { title: string; desc: string; color: string; icon: LucideIcon; }

function EscalabilidadTab(): JSX.Element {
  const futureCards: FutureCard[] = [
    { title: "Eureka Server",        desc: "Service Discovery — registro automático, balanceo de carga, health checks",         color: COLORS.blue,   icon: Server         },
    { title: "Spring Cloud Gateway", desc: "API Gateway — punto único de entrada, routing, rate limiting, auth centralizada",    color: COLORS.purple, icon: Shield         },
    { title: "RabbitMQ",             desc: "Message Broker — eventos asíncronos, cola de notificaciones, dead letter queue",     color: COLORS.amber,  icon: MessageSquare  },
    { title: "Docker Swarm / K8s",   desc: "Orquestación — escalamiento horizontal, alta disponibilidad, rolling updates",       color: "#2496ed",     icon: Package        },
  ];

  return (
    <Section title="📈 Escalabilidad y Arquitectura Futura">
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          {[
            {
              label: "✅ Arquitectura Actual (MVP)", color: COLORS.blue, bg: "#eff6ff", border: "#bfdbfe",
              lines: [
                "App Móvil (APK directo)",
                "↓ HTTP",
                "Landing + ERP Web (Docker)",
                "↓ HTTP",
                "Spring Boot WebFlux (1 MS)",
                "↓ R2DBC",
                "PostgreSQL (2 tablas)",
                "↓ APIs externas",
                "WhatsApp API + SendGrid",
              ],
            },
            {
              label: "🚀 Fase 2 — Microservicios", color: COLORS.purple, bg: "#faf5ff", border: "#ddd6fe",
              lines: [
                "App / Web",
                "↓",
                "Spring Cloud Gateway",
                "↓",
                "Eureka (Service Discovery)",
                "↓",
                "Auth · User · Incident Services",
                "↓",
                "RabbitMQ + PostgreSQL",
              ],
            },
          ].map((box, i) => (
            <div key={i} style={{ background: box.bg, borderRadius: 14, padding: 20, border: `2px solid ${box.border}` }}>
              <h3 style={{ color: box.color, fontWeight: 700, marginTop: 0 }}>{box.label}</h3>
              <div style={{
                background: "white", borderRadius: 10, padding: 14,
                fontFamily: "monospace", fontSize: "0.78rem", color: COLORS.gray[700], lineHeight: 1.8,
              }}>
                {box.lines.map((line, j) => (
                  <div key={j} style={{ color: line.startsWith("↓") ? "#94a3b8" : COLORS.gray[700], paddingLeft: line.startsWith("↓") ? 16 : 0 }}>
                    {line}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 14 }}>
          {futureCards.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={i} style={{
                background: "white", borderRadius: 12, padding: 18,
                boxShadow: "0 2px 10px rgba(0,0,0,0.06)", borderTop: `4px solid ${s.color}`,
              }}>
                <Icon color={s.color} size={22} />
                <div style={{ fontWeight: 700, color: COLORS.navy, margin: "8px 0 6px" }}>{s.title}</div>
                <div style={{ fontSize: "0.8rem", color: COLORS.gray[600], lineHeight: 1.5 }}>{s.desc}</div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

/* ─── COMPONENTES AUXILIARES ───────────────────────────────────────────── */
interface SectionProps  { title: string; children: ReactNode; }
interface IntegCardProps { icon: LucideIcon; color: string; label: string; desc: string; }
interface CalloutProps  { icon: LucideIcon; color: string; title: string; children: ReactNode; }
interface LayerLabelProps { label: string; }

function Section({ title, children }: SectionProps): JSX.Element {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <h2 style={{
        fontSize: "1.5rem", fontWeight: 800, color: COLORS.navy, margin: 0,
        paddingBottom: 12, borderBottom: `3px solid ${COLORS.accent}`,
      }}>{title}</h2>
      {children}
    </div>
  );
}

function Arrow(): JSX.Element {
  return <div style={{ color: "#cbd5e1", margin: "8px 0", textAlign: "center", fontSize: "1.5rem" }}>↓</div>;
}

function LayerLabel({ label }: LayerLabelProps): JSX.Element {
  return (
    <div style={{
      fontWeight: 700, fontSize: "0.85rem", color: COLORS.gray[600],
      textTransform: "uppercase", letterSpacing: 1, marginBottom: 10, marginTop: 8,
      width: "100%", maxWidth: 800, textAlign: "center",
    }}>{label}</div>
  );
}

function IntegCard({ icon: Icon, color, label, desc }: IntegCardProps): JSX.Element {
  return (
    <div style={{ background: "white", borderRadius: 12, padding: 20, border: `2px solid ${color}30`, textAlign: "center" }}>
      <Icon color={color} size={36} />
      <div style={{ fontWeight: 700, color: COLORS.navy, fontSize: "0.95rem", marginTop: 10 }}>{label}</div>
      <div style={{ fontSize: "0.78rem", color: COLORS.gray[600], marginTop: 4 }}>{desc}</div>
    </div>
  );
}

function CalloutBox({ icon: Icon, color, title, children }: CalloutProps): JSX.Element {
  return (
    <div style={{ background: `${color}08`, borderRadius: 12, padding: 20, border: `2px solid ${color}25` }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
        <Icon color={color} size={22} />
        <div style={{ fontWeight: 700, color: COLORS.navy, fontSize: "0.9rem" }}>{title}</div>
      </div>
      {children}
    </div>
  );
}