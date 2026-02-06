"use client";

import React, { useState } from "react";
import { toast } from "react-toastify";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  User,
  Phone,
  Shield,
  CheckCircle2,
  ArrowLeft,
  Hash,
  Calendar,
  Loader2,
} from "lucide-react";

const Register: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3>(1);
  const [formData, setFormData] = useState({
    nombres: "",
    apellidos: "",
    dni: "",
    fechaNacimiento: "",
    telefono: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const validateStep1 = () => {
    if (!formData.nombres.trim()) {
      toast.error("Por favor ingresa tus nombres", { position: "top-center" });
      return false;
    }
    if (!formData.apellidos.trim()) {
      toast.error("Por favor ingresa tus apellidos", {
        position: "top-center",
      });
      return false;
    }
    if (!formData.dni || formData.dni.length !== 8) {
      toast.error("Por favor ingresa un DNI válido (8 dígitos)", {
        position: "top-center",
      });
      return false;
    }
    if (!formData.fechaNacimiento) {
      toast.error("Por favor ingresa tu fecha de nacimiento", {
        position: "top-center",
      });
      return false;
    }
    if (!formData.telefono || formData.telefono.length !== 9) {
      toast.error("Por favor ingresa un teléfono válido (9 dígitos)", {
        position: "top-center",
      });
      return false;
    }
    return true;
  };

  const validateStep2 = () => {
    if (!formData.email) {
      toast.error("Por favor ingresa tu correo electrónico", {
        position: "top-center",
      });
      return false;
    }
    if (!formData.password || formData.password.length < 6) {
      toast.error("La contraseña debe tener al menos 6 caracteres", {
        position: "top-center",
      });
      return false;
    }
    if (formData.password !== formData.confirmPassword) {
      toast.error("Las contraseñas no coinciden", { position: "top-center" });
      return false;
    }
    if (!acceptTerms) {
      toast.error("Debes aceptar los términos y condiciones", {
        position: "top-center",
      });
      return false;
    }
    return true;
  };

  const handleNext = () => {
    debugger
    if (validateStep1()) {
        debugger
      setCurrentStep(2);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    if(currentStep === 2){
        setCurrentStep(3)
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateStep2()) return;

    setIsLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 2500));

      toast.success("Registro enviado correctamente", {
        position: "top-center",
      });

      setCurrentStep(3);
      window.scrollTo({ top: 0, behavior: "smooth" });

      // Aquí iría la navegación
      // navigate('/login');
    } catch (error) {
      toast.error("Error al crear la cuenta. Por favor intenta nuevamente.", {
        position: "top-center",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const progress = (currentStep / 2) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 p-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="max-w-md mx-auto relative z-10 py-8">
        {/* Header */}
        <div className="text-center mb-8 animate-fadeIn">
          <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-2xl">
            <Shield className="w-10 h-10 text-purple-600" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Crear Cuenta</h1>
          <p className="text-purple-100">
            {currentStep < 3
              ? `Paso ${currentStep} de 2`
              : "Proceso completado"}
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-6 bg-white/20 rounded-full h-2 overflow-hidden backdrop-blur-sm">
          <div
            className="h-full bg-white transition-all duration-500 ease-out rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 animate-slideUp">
          <form onSubmit={handleSubmit}>
            {/* Step 1: Datos Personales */}
            {currentStep === 1 && (
              <div className="space-y-5 animate-fadeIn">
                <div className="mb-6">
                  <h2 className="text-xl font-bold text-slate-800 mb-1">
                    Datos Personales
                  </h2>
                  <p className="text-sm text-slate-500">
                    Ingresa tu información básica
                  </p>
                </div>

                {/* Nombres */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Nombres <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                      <User className="w-5 h-5" />
                    </div>
                    <input
                      type="text"
                      value={formData.nombres}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          nombres: e.target.value,
                        }))
                      }
                      placeholder="Juan Carlos"
                      className="w-full pl-12 pr-4 py-4 bg-slate-50 border-2 border-slate-200 rounded-2xl focus:border-purple-500 focus:bg-white focus:outline-none transition-all duration-200"
                    />
                  </div>
                </div>

                {/* Apellidos */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Apellidos <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                      <User className="w-5 h-5" />
                    </div>
                    <input
                      type="text"
                      value={formData.apellidos}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          apellidos: e.target.value,
                        }))
                      }
                      placeholder="Pérez García"
                      className="w-full pl-12 pr-4 py-4 bg-slate-50 border-2 border-slate-200 rounded-2xl focus:border-purple-500 focus:bg-white focus:outline-none transition-all duration-200"
                    />
                  </div>
                </div>

                {/* DNI */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    DNI <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                      <Hash className="w-5 h-5" />
                    </div>
                    <input
                      type="text"
                      value={formData.dni}
                      onChange={(e) => {
                        const value = e.target.value
                          .replace(/\D/g, "")
                          .slice(0, 8);
                        setFormData((prev) => ({ ...prev, dni: value }));
                      }}
                      placeholder="12345678"
                      maxLength={8}
                      className="w-full pl-12 pr-4 py-4 bg-slate-50 border-2 border-slate-200 rounded-2xl focus:border-purple-500 focus:bg-white focus:outline-none transition-all duration-200"
                    />
                  </div>
                </div>

                {/* Fecha de Nacimiento */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Fecha de Nacimiento <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                      <Calendar className="w-5 h-5" />
                    </div>
                    <input
                      type="date"
                      value={formData.fechaNacimiento}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          fechaNacimiento: e.target.value,
                        }))
                      }
                      max={new Date().toISOString().split("T")[0]}
                      className="w-full pl-12 pr-4 py-4 bg-slate-50 border-2 border-slate-200 rounded-2xl focus:border-purple-500 focus:bg-white focus:outline-none transition-all duration-200"
                    />
                  </div>
                </div>

                {/* Teléfono */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Teléfono <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                      <Phone className="w-5 h-5" />
                    </div>
                    <input
                      type="tel"
                      value={formData.telefono}
                      onChange={(e) => {
                        const value = e.target.value
                          .replace(/\D/g, "")
                          .slice(0, 9);
                        setFormData((prev) => ({ ...prev, telefono: value }));
                      }}
                      placeholder="987654321"
                      maxLength={9}
                      className="w-full pl-12 pr-4 py-4 bg-slate-50 border-2 border-slate-200 rounded-2xl focus:border-purple-500 focus:bg-white focus:outline-none transition-all duration-200"
                    />
                  </div>
                </div>

                {/* Next Button */}
                <button
                  type="button"
                  onClick={handleNext}
                  className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-2xl hover:from-purple-700 hover:to-pink-700 shadow-lg shadow-purple-200 hover:shadow-xl transition-all duration-200 active:scale-95 mt-6"
                >
                  Continuar
                </button>
              </div>
            )}

            {/* Step 2: Credenciales */}
            {currentStep === 2 && (
              <div className="space-y-5 animate-fadeIn">
                <div className="mb-6">
                  <button
                    type="button"
                    onClick={() => setCurrentStep(1)}
                    className="flex items-center gap-2 text-purple-600 hover:text-purple-700 font-semibold mb-4 transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Volver
                  </button>
                  <h2 className="text-xl font-bold text-slate-800 mb-1">
                    Credenciales de Acceso
                  </h2>
                  <p className="text-sm text-slate-500">
                    Crea tu usuario y contraseña
                  </p>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Correo Electrónico <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                      <Mail className="w-5 h-5" />
                    </div>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          email: e.target.value,
                        }))
                      }
                      placeholder="tucorreo@ejemplo.com"
                      className="w-full pl-12 pr-4 py-4 bg-slate-50 border-2 border-slate-200 rounded-2xl focus:border-purple-500 focus:bg-white focus:outline-none transition-all duration-200"
                    />
                  </div>
                </div>

                {/* Password */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Contraseña <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                      <Lock className="w-5 h-5" />
                    </div>
                    <input
                      type={showPassword ? "text" : "password"}
                      value={formData.password}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          password: e.target.value,
                        }))
                      }
                      placeholder="Mínimo 6 caracteres"
                      className="w-full pl-12 pr-12 py-4 bg-slate-50 border-2 border-slate-200 rounded-2xl focus:border-purple-500 focus:bg-white focus:outline-none transition-all duration-200"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                    >
                      {showPassword ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Confirm Password */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Confirmar Contraseña <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                      <Lock className="w-5 h-5" />
                    </div>
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      value={formData.confirmPassword}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          confirmPassword: e.target.value,
                        }))
                      }
                      placeholder="Repite tu contraseña"
                      className="w-full pl-12 pr-12 py-4 bg-slate-50 border-2 border-slate-200 rounded-2xl focus:border-purple-500 focus:bg-white focus:outline-none transition-all duration-200"
                    />
                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Terms */}
                <label className="flex items-start gap-3 cursor-pointer group mt-6">
                  <div className="relative mt-1">
                    <input
                      type="checkbox"
                      checked={acceptTerms}
                      onChange={(e) => setAcceptTerms(e.target.checked)}
                      className="sr-only"
                    />
                    <div
                      className={`w-6 h-6 border-2 rounded-lg transition-all duration-200 ${
                        acceptTerms
                          ? "bg-purple-600 border-purple-600"
                          : "bg-white border-slate-300 group-hover:border-purple-400"
                      }`}
                    >
                      {acceptTerms && (
                        <CheckCircle2 className="w-6 h-6 text-white" />
                      )}
                    </div>
                  </div>
                  <span className="text-sm text-slate-600 leading-relaxed">
                    Acepto los{" "}
                    <button
                      type="button"
                      className="text-purple-600 font-semibold hover:underline"
                    >
                      Términos y Condiciones
                    </button>{" "}
                    y la{" "}
                    <button
                      type="button"
                      className="text-purple-600 font-semibold hover:underline"
                    >
                      Política de Privacidad
                    </button>
                  </span>
                </label>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-2xl hover:from-purple-700 hover:to-pink-700 shadow-lg shadow-purple-200 hover:shadow-xl transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-6"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Creando cuenta...
                    </>
                  ) : (
                    <>
                      <CheckCircle2 className="w-5 h-5" />
                      Crear Cuenta
                    </>
                  )}
                </button>
              </div>
            )}

            {currentStep === 3 && (
              <div className="animate-fadeIn text-center space-y-6">
                <div className="flex justify-center">
                  <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center">
                    <Shield className="w-10 h-10 text-purple-600" />
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-slate-800">
                  Registro en proceso
                </h2>

                <p className="text-slate-600 leading-relaxed">
                  Tu información fue enviada correctamente y se encuentra
                  <span className="font-semibold text-slate-800">
                    {" "}
                    pendiente de validación.
                  </span>
                </p>

                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 text-sm text-slate-600">
                  <p>
                    El equipo de soporte del{" "}
                    <span className="font-semibold">broker</span> revisará tu
                    solicitud y habilitará tu cuenta como parte del proceso de
                    validación.
                  </p>
                  <p className="mt-2">
                    Recibirás una notificación por correo electrónico cuando tu
                    cuenta esté activa.
                  </p>
                </div>

                <div className="pt-4">
                  <button
                    type="button"
                    className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-2xl shadow-lg shadow-purple-200 transition-all duration-200"
                  >
                    Entendido
                  </button>
                </div>
              </div>
            )}
          </form>

          {/* Login Link */}
          <div className="mt-6 text-center">
            <p className="text-sm text-slate-600">
              ¿Ya tienes cuenta?{" "}
              <button className="font-semibold text-purple-600 hover:text-purple-700 transition-colors">
                Iniciar Sesión
              </button>
            </p>
          </div>
        </div>

        {/* Security Info */}
        <div className="mt-6 text-center">
          <p className="text-sm text-purple-100 flex items-center justify-center gap-2">
            <Shield className="w-4 h-4" />
            Tus datos están protegidos y encriptados
          </p>
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        .animate-slideUp {
          animation: slideUp 0.6s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Register;
