'use client'
import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { 
  Shield, 
  Car, 
  Phone, 
  Camera, 
  MapPin, 
  FileText, 
  AlertCircle,
  ChevronDown,
  X,
  Check,
  Upload,
  Loader2,
  Info,
  Calendar,
  Hash,
  AlertTriangle,
  CheckCircle2,
  Home,
  Copy,
  Download,
  Share2,
  Clock
} from 'lucide-react';

interface Poliza {
  id: string;
  numero: string;
  tipo: string;
  vigenciaHasta: string;
  estado: 'vigente' | 'por-vencer' | 'vencida';
}

interface Vehiculo {
  id: string;
  placa: string;
  marca: string;
  modelo: string;
  anio: number;
  color: string;
}

interface IncidentFormData {
  polizaId: string;
  vehiculoId: string;
  tipoIncidente: string;
  descripcion: string;
  ubicacion: string;
  referencia: string;
  fotos: File[];
}

interface IncidenciaRegistrada {
  codigo: string;
  fecha: string;
  hora: string;
  estado: string;
}

const RegistroIncidencia: React.FC = () => {
  const polizas: Poliza[] = [
    { id: '1', numero: 'POL-2024-001234', tipo: 'Todo Riesgo', vigenciaHasta: '2025-12-31', estado: 'vigente' },
    { id: '2', numero: 'POL-2024-005678', tipo: 'Contra Terceros', vigenciaHasta: '2025-06-30', estado: 'vigente' },
    { id: '3', numero: 'POL-2023-009876', tipo: 'Todo Riesgo Plus', vigenciaHasta: '2025-03-15', estado: 'por-vencer' },
  ];

  const vehiculos: Vehiculo[] = [
    { id: '1', placa: 'ABC-123', marca: 'Toyota', modelo: 'Corolla', anio: 2022, color: 'Plateado' },
    { id: '2', placa: 'XYZ-789', marca: 'Honda', modelo: 'Civic', anio: 2023, color: 'Negro' },
    { id: '3', placa: 'DEF-456', marca: 'Nissan', modelo: 'Sentra', anio: 2021, color: 'Blanco' },
  ];

  const tiposIncidente = [
    { value: 'choque', label: 'Choque', icon: '🚗', color: 'text-orange-600' },
    { value: 'robo', label: 'Robo/Hurto', icon: '🚨', color: 'text-red-600' },
    { value: 'danio-terceros', label: 'Daño por terceros', icon: '⚠️', color: 'text-yellow-600' },
    { value: 'volcadura', label: 'Volcadura', icon: '🔄', color: 'text-purple-600' },
    { value: 'incendio', label: 'Incendio', icon: '🔥', color: 'text-red-700' },
    { value: 'desastre', label: 'Desastre natural', icon: '🌊', color: 'text-blue-600' },
    { value: 'otros', label: 'Otros', icon: '📋', color: 'text-gray-600' },
  ];

  const [currentStep, setCurrentStep] = useState<1 | 2 | 3 | 4>(1);
  const [formData, setFormData] = useState<IncidentFormData>({
    polizaId: '',
    vehiculoId: '',
    tipoIncidente: '',
    descripcion: '',
    ubicacion: '',
    referencia: '',
    fotos: []
  });

  const [incidenciaRegistrada, setIncidenciaRegistrada] = useState<IncidenciaRegistrada | null>(null);
  const [showPolizaDropdown, setShowPolizaDropdown] = useState(false);
  const [showVehiculoDropdown, setShowVehiculoDropdown] = useState(false);
  const [showTipoDropdown, setShowTipoDropdown] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [gettingLocation, setGettingLocation] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleEmergencyCall = (type: 'policia' | 'bomberos') => {
    const contacts = {
      policia: { number: '105', name: 'Policía Nacional' },
      bomberos: { number: '116', name: 'Bomberos' }
    };
    
    const contact = contacts[type];
    
    const confirmation = window.confirm(
      `¿Desea llamar a ${contact.name} al número ${contact.number}?`
    );
    
    if (confirmation) {
      window.location.href = `tel:${contact.number}`;
      toast.info(`Iniciando llamada a ${contact.name}`, {
        position: 'top-center'
      });
    }
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const fileArray = Array.from(files);
    const remainingSlots = 6 - formData.fotos.length;
    
    if (fileArray.length > remainingSlots) {
      toast.warning(`Solo puedes agregar ${remainingSlots} foto(s) más`, {
        position: 'top-center'
      });
      return;
    }

    const oversizedFiles = fileArray.filter(file => file.size > 5 * 1024 * 1024);
    if (oversizedFiles.length > 0) {
      toast.error('Algunas fotos exceden el tamaño máximo de 5MB', {
        position: 'top-center'
      });
      return;
    }

    setFormData(prev => ({
      ...prev,
      fotos: [...prev.fotos, ...fileArray]
    }));

    toast.success(`${fileArray.length} foto(s) agregada(s) correctamente`, {
      position: 'top-center'
    });
  };

  const removePhoto = (index: number) => {
    setFormData(prev => ({
      ...prev,
      fotos: prev.fotos.filter((_, i) => i !== index)
    }));
    toast.info('Foto eliminada', { position: 'top-center' });
  };

  const getCurrentLocation = () => {
    if (!navigator.geolocation) {
      toast.error('Tu dispositivo no soporta geolocalización', {
        position: 'top-center'
      });
      return;
    }

    setGettingLocation(true);
    toast.info('Obteniendo tu ubicación actual...', {
      position: 'top-center',
      autoClose: 2000
    });

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setFormData(prev => ({
          ...prev,
          ubicacion: `${latitude.toFixed(6)}, ${longitude.toFixed(6)}`
        }));
        setGettingLocation(false);
        toast.success('Ubicación obtenida exitosamente', {
          position: 'top-center'
        });
      },
      (error) => {
        setGettingLocation(false);
        let errorMessage = 'No se pudo obtener la ubicación';
        
        switch(error.code) {
          case error.PERMISSION_DENIED:
            errorMessage = 'Permiso de ubicación denegado';
            break;
          case error.POSITION_UNAVAILABLE:
            errorMessage = 'Ubicación no disponible';
            break;
          case error.TIMEOUT:
            errorMessage = 'Tiempo de espera agotado';
            break;
        }
        
        toast.error(errorMessage, { position: 'top-center' });
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0
      }
    );
  };

  const validateStep = (step: number): boolean => {
    if (step === 1) {
      if (!formData.polizaId) {
        toast.error('Por favor selecciona una póliza', { position: 'top-center' });
        return false;
      }
      if (!formData.vehiculoId) {
        toast.error('Por favor selecciona un vehículo', { position: 'top-center' });
        return false;
      }
      if (!formData.tipoIncidente) {
        toast.error('Por favor selecciona el tipo de incidente', { position: 'top-center' });
        return false;
      }
      return true;
    }
    
    if (step === 2) {
      if (!formData.descripcion.trim()) {
        toast.error('Por favor ingresa una descripción', { position: 'top-center' });
        return false;
      }
      if (formData.descripcion.trim().length < 30) {
        toast.error('La descripción debe tener al menos 30 caracteres', { position: 'top-center' });
        return false;
      }
      if (!formData.ubicacion.trim()) {
        toast.error('Por favor ingresa la ubicación del incidente', { position: 'top-center' });
        return false;
      }
      return true;
    }
    
    return true;
  };

  const handleNextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, 4) as 1 | 2 | 3 | 4);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1) as 1 | 2 | 3 | 4);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const generateCodigoIncidencia = () => {
    const year = new Date().getFullYear();
    const random = Math.floor(Math.random() * 900000) + 100000;
    return `INC-${year}-${random}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateStep(2)) return;

    setIsSubmitting(true);
    setUploadProgress(0);

    try {
      const progressInterval = setInterval(() => {
        setUploadProgress(prev => {
          if (prev >= 90) {
            clearInterval(progressInterval);
            return 90;
          }
          return prev + 10;
        });
      }, 200);

      await new Promise(resolve => setTimeout(resolve, 2500));
      
      clearInterval(progressInterval);
      setUploadProgress(100);
      
      // Generar datos de la incidencia registrada
      const now = new Date();
      const incidencia: IncidenciaRegistrada = {
        codigo: generateCodigoIncidencia(),
        fecha: now.toLocaleDateString('es-PE', { 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        }),
        hora: now.toLocaleTimeString('es-PE', { 
          hour: '2-digit', 
          minute: '2-digit' 
        }),
        estado: 'En Revisión'
      };
      
      setIncidenciaRegistrada(incidencia);
      
      await new Promise(resolve => setTimeout(resolve, 500));
      
      toast.success('¡Incidencia registrada exitosamente!', {
        position: 'top-center',
        autoClose: 3000
      });
      
      // Cambiar al paso 4 (confirmación)
      setCurrentStep(4);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      
    } catch (error) {
      toast.error('Error al registrar la incidencia. Por favor intenta nuevamente.', {
        position: 'top-center'
      });
      console.error(error);
    } finally {
      setIsSubmitting(false);
      setUploadProgress(0);
    }
  };

  const handleCopyCodigo = () => {
    if (incidenciaRegistrada) {
      navigator.clipboard.writeText(incidenciaRegistrada.codigo);
      toast.success('Código copiado al portapapeles', {
        position: 'top-center'
      });
    }
  };

  const handleNuevaIncidencia = () => {
    setFormData({
      polizaId: '',
      vehiculoId: '',
      tipoIncidente: '',
      descripcion: '',
      ubicacion: '',
      referencia: '',
      fotos: []
    });
    setIncidenciaRegistrada(null);
    setCurrentStep(1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const selectedPoliza = polizas.find(p => p.id === formData.polizaId);
  const selectedVehiculo = vehiculos.find(v => v.id === formData.vehiculoId);
  const selectedTipo = tiposIncidente.find(t => t.value === formData.tipoIncidente);

  const getEstadoBadge = (estado: string) => {
    const badges = {
      'vigente': 'bg-emerald-100 text-emerald-700 border-emerald-200',
      'por-vencer': 'bg-amber-100 text-amber-700 border-amber-200',
      'vencida': 'bg-red-100 text-red-700 border-red-200'
    };
    return badges[estado as keyof typeof badges] || badges.vigente;
  };

  const progress = currentStep === 4 ? 100 : (currentStep / 3) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      {/* Header Fixed */}
      <div className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg shadow-blue-200">
                {currentStep === 4 ? (
                  <CheckCircle2 className="w-5 h-5 text-white" />
                ) : (
                  <AlertCircle className="w-5 h-5 text-white" />
                )}
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-800">
                  {currentStep === 4 ? 'Incidencia Registrada' : 'Registrar Incidencia'}
                </h1>
                <p className="text-xs text-slate-500">
                  {currentStep === 4 ? 'Confirmación exitosa' : `Paso ${currentStep} de 3`}
                </p>
              </div>
            </div>
            {incidenciaRegistrada && currentStep === 4 ? (
              <div className="text-right">
                <p className="text-xs text-slate-500">Código de Incidencia</p>
                <p className="text-sm font-mono font-bold text-blue-600">{incidenciaRegistrada.codigo}</p>
              </div>
            ) : (
              <div className="text-right">
                <p className="text-xs text-slate-500">Folio temporal</p>
                <p className="text-sm font-mono font-semibold text-slate-700">#TMP-{Date.now().toString().slice(-6)}</p>
              </div>
            )}
          </div>
          
          {/* Progress Bar */}
          <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
            <div 
              className={`h-full transition-all duration-500 ease-out ${
                currentStep === 4 ? 'bg-gradient-to-r from-green-600 to-green-500' : 'bg-gradient-to-r from-blue-600 to-blue-500'
              }`}
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-6 pb-24">
        
        {/* Emergency Calls - Solo mostrar si no está en paso 4 */}
        {currentStep !== 4 && !isSubmitting && (
          <div className="grid grid-cols-2 gap-3 mb-6 sticky top-[100px] z-40">
            <button
              onClick={() => handleEmergencyCall('policia')}
              className="group bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 active:scale-95 border border-blue-500"
            >
              <div className="flex items-center justify-center gap-3">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <p className="font-bold text-lg">Policía</p>
                  <p className="text-sm opacity-90 font-medium">105</p>
                </div>
              </div>
            </button>
            
            <button
              onClick={() => handleEmergencyCall('bomberos')}
              className="group bg-gradient-to-br from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 active:scale-95 border border-red-500"
            >
              <div className="flex items-center justify-center gap-3">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <p className="font-bold text-lg">Bomberos</p>
                  <p className="text-sm opacity-90 font-medium">116</p>
                </div>
              </div>
            </button>
          </div>
        )}

        {/* Form Card o Confirmación */}
        <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
          
          {/* Step 1: Datos de Póliza y Vehículo */}
          {currentStep === 1 && (
            <div className="p-6 space-y-6 animate-fadeIn">
              <div className="flex items-center gap-3 pb-4 border-b border-slate-200">
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Shield className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-slate-800">Información del Seguro</h2>
                  <p className="text-sm text-slate-500">Selecciona la póliza y vehículo afectado</p>
                </div>
              </div>

              {/* Póliza Selection */}
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-slate-700 mb-3">
                  <Shield className="w-4 h-4 text-blue-600" />
                  Póliza de Seguro
                  <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setShowPolizaDropdown(!showPolizaDropdown)}
                    className={`w-full px-5 py-4 bg-slate-50 border-2 rounded-2xl text-left flex items-center justify-between transition-all duration-200 ${
                      showPolizaDropdown ? 'border-blue-500 bg-blue-50' : 'border-slate-200 hover:border-blue-300'
                    } ${selectedPoliza ? 'bg-white border-slate-300' : ''}`}
                  >
                    {selectedPoliza ? (
                      <div className="flex items-center gap-3 flex-1">
                        <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Shield className="w-5 h-5 text-blue-600" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-slate-800 flex items-center gap-2">
                            {selectedPoliza.numero}
                            <span className={`text-xs px-2 py-0.5 rounded-full border font-medium ${getEstadoBadge(selectedPoliza.estado)}`}>
                              {selectedPoliza.estado === 'vigente' ? 'Vigente' : selectedPoliza.estado === 'por-vencer' ? 'Por vencer' : 'Vencida'}
                            </span>
                          </p>
                          <p className="text-sm text-slate-500 flex items-center gap-2 mt-1">
                            {selectedPoliza.tipo}
                            <span className="text-slate-400">•</span>
                            <Calendar className="w-3 h-3" />
                            Hasta {selectedPoliza.vigenciaHasta}
                          </p>
                        </div>
                      </div>
                    ) : (
                      <span className="text-slate-400 flex items-center gap-2">
                        <Shield className="w-4 h-4" />
                        Seleccionar póliza
                      </span>
                    )}
                    <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${showPolizaDropdown ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {showPolizaDropdown && (
                    <div className="absolute z-50 w-full mt-2 bg-white border-2 border-slate-200 rounded-2xl shadow-2xl max-h-80 overflow-y-auto animate-slideDown">
                      {polizas.map((poliza, index) => (
                        <button
                          key={poliza.id}
                          type="button"
                          onClick={() => {
                            setFormData(prev => ({ ...prev, polizaId: poliza.id }));
                            setShowPolizaDropdown(false);
                          }}
                          className={`w-full px-5 py-4 text-left hover:bg-blue-50 transition-all duration-200 flex items-center gap-3 ${
                            index !== polizas.length - 1 ? 'border-b border-slate-100' : ''
                          } ${formData.polizaId === poliza.id ? 'bg-blue-50' : ''}`}
                        >
                          <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                            <Shield className="w-5 h-5 text-blue-600" />
                          </div>
                          <div className="flex-1">
                            <p className="font-semibold text-slate-800 flex items-center gap-2">
                              {poliza.numero}
                              <span className={`text-xs px-2 py-0.5 rounded-full border font-medium ${getEstadoBadge(poliza.estado)}`}>
                                {poliza.estado === 'vigente' ? 'Vigente' : poliza.estado === 'por-vencer' ? 'Por vencer' : 'Vencida'}
                              </span>
                            </p>
                            <p className="text-sm text-slate-500 mt-1">{poliza.tipo}</p>
                            <p className="text-xs text-slate-400 flex items-center gap-1 mt-1">
                              <Calendar className="w-3 h-3" />
                              Vigente hasta {poliza.vigenciaHasta}
                            </p>
                          </div>
                          {formData.polizaId === poliza.id && (
                            <Check className="w-5 h-5 text-blue-600" />
                          )}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Vehículo Selection */}
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-slate-700 mb-3">
                  <Car className="w-4 h-4 text-blue-600" />
                  Vehículo Asegurado
                  <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setShowVehiculoDropdown(!showVehiculoDropdown)}
                    className={`w-full px-5 py-4 bg-slate-50 border-2 rounded-2xl text-left flex items-center justify-between transition-all duration-200 ${
                      showVehiculoDropdown ? 'border-blue-500 bg-blue-50' : 'border-slate-200 hover:border-blue-300'
                    } ${selectedVehiculo ? 'bg-white border-slate-300' : ''}`}
                  >
                    {selectedVehiculo ? (
                      <div className="flex items-center gap-3 flex-1">
                        <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Car className="w-5 h-5 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-slate-800">{selectedVehiculo.placa}</p>
                          <p className="text-sm text-slate-500 mt-1">
                            {selectedVehiculo.marca} {selectedVehiculo.modelo} {selectedVehiculo.anio}
                          </p>
                          <p className="text-xs text-slate-400 mt-1">Color: {selectedVehiculo.color}</p>
                        </div>
                      </div>
                    ) : (
                      <span className="text-slate-400 flex items-center gap-2">
                        <Car className="w-4 h-4" />
                        Seleccionar vehículo
                      </span>
                    )}
                    <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${showVehiculoDropdown ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {showVehiculoDropdown && (
                    <div className="absolute z-50 w-full mt-2 bg-white border-2 border-slate-200 rounded-2xl shadow-2xl max-h-80 overflow-y-auto animate-slideDown">
                      {vehiculos.map((vehiculo, index) => (
                        <button
                          key={vehiculo.id}
                          type="button"
                          onClick={() => {
                            setFormData(prev => ({ ...prev, vehiculoId: vehiculo.id }));
                            setShowVehiculoDropdown(false);
                          }}
                          className={`w-full px-5 py-4 text-left hover:bg-blue-50 transition-all duration-200 flex items-center gap-3 ${
                            index !== vehiculos.length - 1 ? 'border-b border-slate-100' : ''
                          } ${formData.vehiculoId === vehiculo.id ? 'bg-blue-50' : ''}`}
                        >
                          <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                            <Car className="w-5 h-5 text-blue-600" />
                          </div>
                          <div className="flex-1">
                            <p className="font-semibold text-slate-800">{vehiculo.placa}</p>
                            <p className="text-sm text-slate-600 mt-1">
                              {vehiculo.marca} {vehiculo.modelo}
                            </p>
                            <p className="text-xs text-slate-400 mt-1">
                              {vehiculo.anio} • {vehiculo.color}
                            </p>
                          </div>
                          {formData.vehiculoId === vehiculo.id && (
                            <Check className="w-5 h-5 text-blue-600" />
                          )}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Tipo de Incidente */}
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-slate-700 mb-3">
                  <FileText className="w-4 h-4 text-blue-600" />
                  Tipo de Incidente
                  <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {tiposIncidente.map((tipo) => (
                    <button
                      key={tipo.value}
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, tipoIncidente: tipo.value }))}
                      className={`p-4 rounded-2xl border-2 transition-all duration-200 text-left ${
                        formData.tipoIncidente === tipo.value
                          ? 'border-blue-500 bg-blue-50 shadow-md'
                          : 'border-slate-200 bg-white hover:border-blue-300'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{tipo.icon}</span>
                        <div className="flex-1">
                          <p className={`font-semibold ${formData.tipoIncidente === tipo.value ? 'text-blue-700' : 'text-slate-700'}`}>
                            {tipo.label}
                          </p>
                        </div>
                        {formData.tipoIncidente === tipo.value && (
                          <Check className="w-5 h-5 text-blue-600" />
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Detalles del Incidente */}
          {currentStep === 2 && (
            <div className="p-6 space-y-6 animate-fadeIn">
              <div className="flex items-center gap-3 pb-4 border-b border-slate-200">
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                  <FileText className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-slate-800">Detalles del Incidente</h2>
                  <p className="text-sm text-slate-500">Describe lo sucedido y la ubicación</p>
                </div>
              </div>

              {/* Resumen de selección anterior */}
              <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4">
                <p className="text-xs font-semibold text-blue-700 mb-2 uppercase tracking-wide">Resumen</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="w-4 h-4 text-blue-600" />
                    <span className="text-slate-700">
                      <span className="font-semibold">Póliza:</span> {selectedPoliza?.numero}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Car className="w-4 h-4 text-blue-600" />
                    <span className="text-slate-700">
                      <span className="font-semibold">Vehículo:</span> {selectedVehiculo?.placa} - {selectedVehiculo?.marca} {selectedVehiculo?.modelo}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-xl">{selectedTipo?.icon}</span>
                    <span className="text-slate-700">
                      <span className="font-semibold">Tipo:</span> {selectedTipo?.label}
                    </span>
                  </div>
                </div>
              </div>

              {/* Descripción */}
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-slate-700 mb-3">
                  <FileText className="w-4 h-4 text-blue-600" />
                  Descripción del Incidente
                  <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <textarea
                    value={formData.descripcion}
                    onChange={(e) => setFormData(prev => ({ ...prev, descripcion: e.target.value }))}
                    placeholder="Describe detalladamente qué sucedió, cómo ocurrió el incidente, quiénes estuvieron involucrados y cualquier detalle relevante..."
                    rows={6}
                    maxLength={1000}
                    className="w-full px-5 py-4 bg-slate-50 border-2 border-slate-200 rounded-2xl focus:border-blue-500 focus:bg-white focus:outline-none resize-none transition-all duration-200 text-slate-700"
                  />
                  <div className="absolute bottom-3 right-3 text-xs text-slate-400 bg-white px-2 py-1 rounded-lg">
                    {formData.descripcion.length}/1000
                  </div>
                </div>
                <p className="text-xs text-slate-500 mt-2 flex items-center gap-1">
                  <Info className="w-3 h-3" />
                  Mínimo 30 caracteres - Sé lo más específico posible
                </p>
              </div>

              {/* Ubicación */}
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-slate-700 mb-3">
                  <MapPin className="w-4 h-4 text-blue-600" />
                  Ubicación del Incidente
                  <span className="text-red-500">*</span>
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={formData.ubicacion}
                    onChange={(e) => setFormData(prev => ({ ...prev, ubicacion: e.target.value }))}
                    placeholder="Ingresa la dirección o coordenadas"
                    className="flex-1 px-5 py-4 bg-slate-50 border-2 border-slate-200 rounded-2xl focus:border-blue-500 focus:bg-white focus:outline-none transition-all duration-200"
                  />
                  <button
                    type="button"
                    onClick={getCurrentLocation}
                    disabled={gettingLocation}
                    className="px-5 py-4 bg-blue-600 text-white rounded-2xl hover:bg-blue-700 transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 font-medium shadow-lg shadow-blue-200"
                  >
                    {gettingLocation ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      <MapPin className="w-5 h-5" />
                    )}
                    <span className="hidden sm:inline">GPS</span>
                  </button>
                </div>
              </div>

              {/* Referencia */}
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-slate-700 mb-3">
                  <Info className="w-4 h-4 text-slate-500" />
                  Referencia Adicional
                  <span className="text-xs text-slate-400 font-normal">(Opcional)</span>
                </label>
                <input
                  type="text"
                  value={formData.referencia}
                  onChange={(e) => setFormData(prev => ({ ...prev, referencia: e.target.value }))}
                  placeholder="Ej: Frente al centro comercial, cerca del parque principal..."
                  maxLength={200}
                  className="w-full px-5 py-4 bg-slate-50 border-2 border-slate-200 rounded-2xl focus:border-blue-500 focus:bg-white focus:outline-none transition-all duration-200"
                />
              </div>
            </div>
          )}

          {/* Step 3: Fotos y Confirmación */}
          {currentStep === 3 && (
            <div className="p-6 space-y-6 animate-fadeIn">
              <div className="flex items-center gap-3 pb-4 border-b border-slate-200">
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Camera className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-slate-800">Evidencia Fotográfica</h2>
                  <p className="text-sm text-slate-500">Agrega fotos del incidente (opcional)</p>
                </div>
              </div>

              {/* Upload Area */}
              <div>
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handlePhotoUpload}
                  className="hidden"
                  id="photo-upload"
                  disabled={formData.fotos.length >= 6}
                />
                
                <label
                  htmlFor="photo-upload"
                  className={`block w-full px-6 py-10 bg-gradient-to-br from-slate-50 to-blue-50 border-2 border-dashed rounded-3xl text-center cursor-pointer transition-all duration-300 ${
                    formData.fotos.length >= 6
                      ? 'border-slate-300 opacity-50 cursor-not-allowed'
                      : 'border-slate-300 hover:border-blue-400 hover:from-blue-50 hover:to-blue-100'
                  }`}
                >
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Upload className="w-8 h-8 text-blue-600" />
                  </div>
                  <p className="text-slate-700 font-semibold mb-1">
                    {formData.fotos.length >= 6 ? 'Máximo de fotos alcanzado' : 'Toca para agregar fotos'}
                  </p>
                  <p className="text-sm text-slate-500">
                    {formData.fotos.length}/6 fotos • Máx. 5MB por imagen
                  </p>
                  <p className="text-xs text-slate-400 mt-2">
                    JPG, PNG, HEIC, WebP
                  </p>
                </label>
              </div>

              {/* Fotos Preview */}
              {formData.fotos.length > 0 && (
                <div>
                  <p className="text-sm font-semibold text-slate-700 mb-3">Fotos agregadas ({formData.fotos.length})</p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {formData.fotos.map((foto, index) => (
                      <div key={index} className="relative group aspect-square rounded-2xl overflow-hidden bg-slate-100 shadow-md">
                        <img
                          src={URL.createObjectURL(foto)}
                          alt={`Foto ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                          <button
                            type="button"
                            onClick={() => removePhoto(index)}
                            className="w-10 h-10 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-all duration-200 active:scale-90 shadow-lg"
                          >
                            <X className="w-5 h-5" />
                          </button>
                        </div>
                        <div className="absolute top-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded-lg font-medium">
                          #{index + 1}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Resumen Final */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-3xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <AlertCircle className="w-5 h-5 text-blue-600" />
                  <h3 className="font-bold text-slate-800">Resumen de tu Incidencia</h3>
                </div>
                <div className="space-y-3">
                  <div className="bg-white rounded-xl p-3 shadow-sm">
                    <p className="text-xs text-slate-500 font-semibold mb-1">PÓLIZA</p>
                    <p className="text-sm text-slate-800 font-semibold">{selectedPoliza?.numero}</p>
                    <p className="text-xs text-slate-600">{selectedPoliza?.tipo}</p>
                  </div>
                  <div className="bg-white rounded-xl p-3 shadow-sm">
                    <p className="text-xs text-slate-500 font-semibold mb-1">VEHÍCULO</p>
                    <p className="text-sm text-slate-800 font-semibold">{selectedVehiculo?.placa}</p>
                    <p className="text-xs text-slate-600">{selectedVehiculo?.marca} {selectedVehiculo?.modelo} {selectedVehiculo?.anio}</p>
                  </div>
                  <div className="bg-white rounded-xl p-3 shadow-sm">
                    <p className="text-xs text-slate-500 font-semibold mb-1">TIPO DE INCIDENTE</p>
                    <p className="text-sm text-slate-800 font-semibold flex items-center gap-2">
                      <span>{selectedTipo?.icon}</span>
                      {selectedTipo?.label}
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-3 shadow-sm">
                    <p className="text-xs text-slate-500 font-semibold mb-1">UBICACIÓN</p>
                    <p className="text-sm text-slate-800 line-clamp-2">{formData.ubicacion}</p>
                    {formData.referencia && (
                      <p className="text-xs text-slate-600 mt-1">Ref: {formData.referencia}</p>
                    )}
                  </div>
                  <div className="bg-white rounded-xl p-3 shadow-sm">
                    <p className="text-xs text-slate-500 font-semibold mb-1">FOTOS ADJUNTAS</p>
                    <p className="text-sm text-slate-800 font-semibold">{formData.fotos.length} imagen{formData.fotos.length !== 1 ? 'es' : ''}</p>
                  </div>
                </div>
              </div>

              {/* Info importante */}
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4">
                <div className="flex gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-amber-900 mb-1">Información Importante</p>
                    <p className="text-xs text-amber-800 leading-relaxed">
                      Al enviar esta incidencia, confirmas que la información proporcionada es veraz y completa. 
                      Nuestro equipo revisará tu caso en un plazo máximo de 24 horas hábiles.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Confirmación y Detalle */}
          {currentStep === 4 && incidenciaRegistrada && (
            <div className="p-6 space-y-6 animate-fadeIn">
              {/* Success Header */}
              <div className="text-center py-8">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-2xl shadow-green-200 animate-bounce">
                  <CheckCircle2 className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-slate-800 mb-2">¡Incidencia Registrada!</h2>
                <p className="text-slate-600">Tu caso ha sido registrado exitosamente en nuestro sistema</p>
              </div>

              {/* Código de Incidencia */}
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-6 text-white shadow-2xl">
                <div className="text-center">
                  <p className="text-sm opacity-90 mb-2">Código de Incidencia</p>
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <Hash className="w-6 h-6" />
                    <p className="text-3xl font-bold font-mono tracking-wider">{incidenciaRegistrada.codigo}</p>
                  </div>
                  <button
                    onClick={handleCopyCodigo}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 hover:bg-white/30 rounded-xl transition-all duration-200 active:scale-95 font-medium backdrop-blur-sm"
                  >
                    <Copy className="w-4 h-4" />
                    Copiar Código
                  </button>
                </div>
              </div>

              {/* Información de Registro */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-5 h-5 text-blue-600" />
                    <p className="text-xs text-slate-500 font-semibold uppercase">Fecha</p>
                  </div>
                  <p className="text-sm font-semibold text-slate-800">{incidenciaRegistrada.fecha}</p>
                </div>
                <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-5 h-5 text-blue-600" />
                    <p className="text-xs text-slate-500 font-semibold uppercase">Hora</p>
                  </div>
                  <p className="text-sm font-semibold text-slate-800">{incidenciaRegistrada.hora}</p>
                </div>
              </div>

              {/* Estado */}
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center">
                    <Clock className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <p className="text-xs text-amber-700 font-semibold uppercase mb-1">Estado Actual</p>
                    <p className="text-sm font-bold text-amber-900">{incidenciaRegistrada.estado}</p>
                  </div>
                </div>
              </div>

              {/* Detalle Completo de la Incidencia */}
              <div className="border-t-2 border-slate-200 pt-6">
                <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-blue-600" />
                  Detalle de la Incidencia
                </h3>
                
                <div className="space-y-4">
                  {/* Póliza */}
                  <div className="bg-white border-2 border-slate-200 rounded-2xl p-4">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Shield className="w-5 h-5 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <p className="text-xs text-slate-500 font-semibold uppercase mb-1">Póliza de Seguro</p>
                        <p className="text-sm font-bold text-slate-800">{selectedPoliza?.numero}</p>
                        <p className="text-xs text-slate-600 mt-1">{selectedPoliza?.tipo}</p>
                        <p className="text-xs text-slate-500 flex items-center gap-1 mt-1">
                          <Calendar className="w-3 h-3" />
                          Vigente hasta {selectedPoliza?.vigenciaHasta}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Vehículo */}
                  <div className="bg-white border-2 border-slate-200 rounded-2xl p-4">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Car className="w-5 h-5 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <p className="text-xs text-slate-500 font-semibold uppercase mb-1">Vehículo Afectado</p>
                        <p className="text-sm font-bold text-slate-800">{selectedVehiculo?.placa}</p>
                        <p className="text-xs text-slate-600 mt-1">
                          {selectedVehiculo?.marca} {selectedVehiculo?.modelo} ({selectedVehiculo?.anio})
                        </p>
                        <p className="text-xs text-slate-500 mt-1">Color: {selectedVehiculo?.color}</p>
                      </div>
                    </div>
                  </div>

                  {/* Tipo de Incidente */}
                  <div className="bg-white border-2 border-slate-200 rounded-2xl p-4">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0 text-2xl">
                        {selectedTipo?.icon}
                      </div>
                      <div className="flex-1">
                        <p className="text-xs text-slate-500 font-semibold uppercase mb-1">Tipo de Incidente</p>
                        <p className="text-sm font-bold text-slate-800">{selectedTipo?.label}</p>
                      </div>
                    </div>
                  </div>

                  {/* Descripción */}
                  <div className="bg-white border-2 border-slate-200 rounded-2xl p-4">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <FileText className="w-5 h-5 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <p className="text-xs text-slate-500 font-semibold uppercase mb-2">Descripción</p>
                        <p className="text-sm text-slate-700 leading-relaxed line-clamp-3">{formData.descripcion}</p>
                      </div>
                    </div>
                  </div>

                  {/* Ubicación */}
                  <div className="bg-white border-2 border-slate-200 rounded-2xl p-4">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <p className="text-xs text-slate-500 font-semibold uppercase mb-1">Ubicación</p>
                        <p className="text-sm text-slate-700">{formData.ubicacion}</p>
                        {formData.referencia && (
                          <p className="text-xs text-slate-500 mt-2">
                            <span className="font-semibold">Referencia:</span> {formData.referencia}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Fotos */}
                  {formData.fotos.length > 0 && (
                    <div className="bg-white border-2 border-slate-200 rounded-2xl p-4">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Camera className="w-5 h-5 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <p className="text-xs text-slate-500 font-semibold uppercase">Evidencia Fotográfica</p>
                          <p className="text-sm text-slate-700">{formData.fotos.length} imagen{formData.fotos.length !== 1 ? 'es' : ''} adjunta{formData.fotos.length !== 1 ? 's' : ''}</p>
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-2 mt-3">
                        {formData.fotos.map((foto, index) => (
                          <div key={index} className="relative aspect-square rounded-xl overflow-hidden bg-slate-100">
                            <img
                              src={URL.createObjectURL(foto)}
                              alt={`Foto ${index + 1}`}
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute top-1 left-1 bg-black/70 text-white text-xs px-2 py-0.5 rounded-lg font-medium">
                              #{index + 1}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Información de Seguimiento */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-3xl p-6">
                <div className="flex gap-3">
                  <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-blue-900 mb-2">Próximos Pasos</p>
                    <ul className="space-y-2 text-xs text-blue-800">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5 flex-shrink-0"></span>
                        <span>Nuestro equipo revisará tu caso en un plazo máximo de 24 horas hábiles</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5 flex-shrink-0"></span>
                        <span>Recibirás notificaciones sobre el estado de tu incidencia</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5 flex-shrink-0"></span>
                        <span>Usa el código <strong>{incidenciaRegistrada.codigo}</strong> para consultar el estado</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Botones de Acción */}
              <div className="grid grid-cols-1 gap-3 pt-4">
                <button
                  onClick={handleNuevaIncidencia}
                  className="w-full py-4 px-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-2xl hover:from-blue-700 hover:to-blue-800 shadow-lg shadow-blue-200 hover:shadow-xl transition-all duration-200 active:scale-95 flex items-center justify-center gap-2"
                >
                  <Home className="w-5 h-5" />
                  Registrar Nueva Incidencia
                </button>
              </div>
            </div>
          )}

          {/* Navigation Buttons - Solo para pasos 1, 2 y 3 */}
          {currentStep !== 4 && (
            <div className="p-6 bg-slate-50 border-t border-slate-200">
              <div className="flex gap-3">
                {currentStep > 1 && (
                  <button
                    type="button"
                    onClick={handlePrevStep}
                    disabled={isSubmitting}
                    className="flex-1 py-4 px-6 bg-white border-2 border-slate-300 text-slate-700 font-semibold rounded-2xl hover:bg-slate-50 transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Anterior
                  </button>
                )}
                
                {currentStep < 3 ? (
                  <button
                    type="button"
                    onClick={handleNextStep}
                    className="flex-1 py-4 px-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-2xl hover:from-blue-700 hover:to-blue-800 shadow-lg shadow-blue-200 hover:shadow-xl transition-all duration-200 active:scale-95"
                  >
                    Continuar
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="flex-1 py-4 px-6 bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold rounded-2xl hover:from-green-700 hover:to-green-800 shadow-lg shadow-green-200 hover:shadow-xl transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-700">
                          <div 
                            className="h-full bg-green-800 transition-all duration-300"
                            style={{ width: `${uploadProgress}%` }}
                          />
                        </div>
                        <span className="relative flex items-center justify-center gap-2">
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Enviando... {uploadProgress}%
                        </span>
                      </>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        <Check className="w-5 h-5" />
                        Enviar Incidencia
                      </span>
                    )}
                  </button>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Footer Info - Solo mostrar si no está en paso 4 */}
        {currentStep !== 4 && (
          <div className="mt-6 text-center">
            <p className="text-sm text-slate-500 flex items-center justify-center gap-2">
              <Shield className="w-4 h-4" />
              Tus datos están protegidos y encriptados
            </p>
          </div>
        )}
      </div>

      {/* CSS para animaciones */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .animate-slideDown {
          animation: slideDown 0.2s ease-out;
        }
      `}</style>
    </div>
  );
};

export default RegistroIncidencia;