"use client";

import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Stepper,
  Step,
  StepLabel,
  LinearProgress,
  Avatar,
  Divider,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import HomeIcon from "@mui/icons-material/Home";
import DescriptionIcon from "@mui/icons-material/Description";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import SaveIcon from "@mui/icons-material/Save";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useRouter } from "next/navigation";

const steps = [
  "Datos Personales",
  "Información de Contacto",
  "Dirección",
  "Documentación",
];

interface SectionProgress {
  personalData: number;
  contactInfo: number;
  address: number;
  documentation: number;
}

function ClientRegistrationForm() {
  const [activeStep, setActiveStep] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
 const router = useRouter();
  // Estado del formulario
  const [formData, setFormData] = useState({
    // Datos Personales
    firstName: "",
    lastName: "",
    dni: "",
    birthDate: "",
    gender: "",
    
    // Información de Contacto
    email: "",
    phone: "",
    alternativePhone: "",
    password: "",
    
    // Dirección
    street: "",
    district: "",
    city: "",
    province: "",
    postalCode: "",
    
    // Documentación
    documentType: "",
    documentNumber: "",
    issueDate: "",
    expiryDate: "",
  });

  // Calcular progreso por sección
  const [sectionProgress, setSectionProgress] = useState<SectionProgress>({
    personalData: 0,
    contactInfo: 0,
    address: 0,
    documentation: 0,
  });

  // Progreso total
  const totalProgress = 
    (sectionProgress.personalData +
    sectionProgress.contactInfo +
    sectionProgress.address +
    sectionProgress.documentation) / 4;

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
    // Aquí calcularías el progreso real
    updateSectionProgress();
  };

  const updateSectionProgress = () => {
    // Lógica para calcular progreso (simplificada para el ejemplo)
    setSectionProgress({
      personalData: 60,
      contactInfo: 40,
      address: 20,
      documentation: 0,
    });
  };

  return (
    <Box sx={{ p: 3 }}>
      {/* Header con gradiente */}
      <Card 
        elevation={0}
        sx={{ 
          mb: 4,
    background: "linear-gradient(135deg, #4fc3f7 0%, #0288d1 100%)",
          color: 'white',
          borderRadius: 3,
          overflow: 'hidden',
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(10px)'
          }
        }}
      >
        <CardContent sx={{ p: 4, position: 'relative', zIndex: 1 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
            <PersonIcon sx={{ fontSize: 32, color: 'white', opacity: 0.95 }} />
            <Typography 
              variant="h5" 
              fontWeight={700}
              sx={{ 
                color: 'white',
                letterSpacing: '-0.02em'
              }}
            >
              Registro de Cliente
            </Typography>
          </Box>
          
          <Typography 
            variant="body2" 
            sx={{ 
              color: 'rgba(255, 255, 255, 0.95)',
              fontWeight: 400,
              ml: 6
            }}
          >
            Complete la información para finalizar el registro del cliente
          </Typography>
        </CardContent>
      </Card>

      {/* Layout principal con Flexbox */}
      <Box sx={{ display: 'flex', gap: 3, flexWrap: { xs: 'wrap', md: 'nowrap' } }}>
        {/* Sidebar - Progress Overview */}
        <Box sx={{ 
          width: { xs: '100%', md: '320px' },
          flexShrink: 0
        }}>
          <Card 
            elevation={0}
            sx={{ 
              position: { md: 'sticky' },
              background:"transparent",
              top: 20,
              border: '1px solid',
              borderColor: 'divider',
              borderRadius: 2
            }}
          >
            <CardContent sx={{ p: 3 }}>
              <Typography variant="h6" fontWeight={600} gutterBottom>
                Progreso General
              </Typography>
              
              <Box sx={{ mb: 3 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography variant="body2" color="text.secondary">
                    Completado
                  </Typography>
                  <Typography variant="body2" fontWeight={600} color="primary">
                    {Math.round(totalProgress)}%
                  </Typography>
                </Box>
                <LinearProgress 
                  variant="determinate" 
                  value={totalProgress} 
                  sx={{ 
                    height: 8, 
                    borderRadius: 4,
                    bgcolor: 'action.hover',
                    '& .MuiLinearProgress-bar': {
                      borderRadius: 4
                    }
                  }}
                />
              </Box>

              <Divider sx={{ my: 2 }} />

              {/* Secciones */}
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {/* Datos Personales */}
                <Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                    <Avatar 
                      sx={{ 
                        width: 32, 
                        height: 32, 
                        bgcolor: sectionProgress.personalData === 100 ? 'success.main' : 'primary.main'
                      }}
                    >
                      {sectionProgress.personalData === 100 ? (
                        <CheckCircleIcon sx={{ fontSize: 18 }} />
                      ) : (
                        <PersonIcon sx={{ fontSize: 18 }} />
                      )}
                    </Avatar>
                    <Box sx={{ flex: 1 }}>
                      <Typography variant="body2" fontWeight={500}>
                        Datos Personales
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {sectionProgress.personalData}% completado
                      </Typography>
                    </Box>
                  </Box>
                  <LinearProgress 
                    variant="determinate" 
                    value={sectionProgress.personalData}
                    sx={{ 
                      height: 4, 
                      borderRadius: 2,
                      bgcolor: 'action.hover'
                    }}
                  />
                </Box>

                {/* Información de Contacto */}
                <Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                    <Avatar 
                      sx={{ 
                        width: 32, 
                        height: 32, 
                        bgcolor: sectionProgress.contactInfo === 100 ? 'success.main' : 'primary.main'
                      }}
                    >
                      {sectionProgress.contactInfo === 100 ? (
                        <CheckCircleIcon sx={{ fontSize: 18 }} />
                      ) : (
                        <ContactMailIcon sx={{ fontSize: 18 }} />
                      )}
                    </Avatar>
                    <Box sx={{ flex: 1 }}>
                      <Typography variant="body2" fontWeight={500}>
                        Información de Contacto
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {sectionProgress.contactInfo}% completado
                      </Typography>
                    </Box>
                  </Box>
                  <LinearProgress 
                    variant="determinate" 
                    value={sectionProgress.contactInfo}
                    sx={{ 
                      height: 4, 
                      borderRadius: 2,
                      bgcolor: 'action.hover'
                    }}
                  />
                </Box>

                {/* Dirección */}
                <Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                    <Avatar 
                      sx={{ 
                        width: 32, 
                        height: 32, 
                        bgcolor: sectionProgress.address === 100 ? 'success.main' : 'primary.main'
                      }}
                    >
                      {sectionProgress.address === 100 ? (
                        <CheckCircleIcon sx={{ fontSize: 18 }} />
                      ) : (
                        <HomeIcon sx={{ fontSize: 18 }} />
                      )}
                    </Avatar>
                    <Box sx={{ flex: 1 }}>
                      <Typography variant="body2" fontWeight={500}>
                        Dirección
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {sectionProgress.address}% completado
                      </Typography>
                    </Box>
                  </Box>
                  <LinearProgress 
                    variant="determinate" 
                    value={sectionProgress.address}
                    sx={{ 
                      height: 4, 
                      borderRadius: 2,
                      bgcolor: 'action.hover'
                    }}
                  />
                </Box>

                {/* Documentación */}
                <Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                    <Avatar 
                      sx={{ 
                        width: 32, 
                        height: 32, 
                        bgcolor: sectionProgress.documentation === 100 ? 'success.main' : 'primary.main'
                      }}
                    >
                      {sectionProgress.documentation === 100 ? (
                        <CheckCircleIcon sx={{ fontSize: 18 }} />
                      ) : (
                        <DescriptionIcon sx={{ fontSize: 18 }} />
                      )}
                    </Avatar>
                    <Box sx={{ flex: 1 }}>
                      <Typography variant="body2" fontWeight={500}>
                        Documentación
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {sectionProgress.documentation}% completado
                      </Typography>
                    </Box>
                  </Box>
                  <LinearProgress 
                    variant="determinate" 
                    value={sectionProgress.documentation}
                    sx={{ 
                      height: 4, 
                      borderRadius: 2,
                      bgcolor: 'action.hover'
                    }}
                  />
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Box>

        {/* Main Form Area */}
        <Box sx={{ flex: 1, minWidth: 0 }}>
          {/* Stepper */}
          <Card elevation={0} sx={{ mb: 3, border: '1px solid', borderColor: 'divider', borderRadius: 2 , background:"transparent" }}>
            <CardContent sx={{ p: 3 }}>
              <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label) => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
            </CardContent>
          </Card>

          {/* Form Sections */}
          {activeStep === 0 && (
            <Card elevation={0} sx={{ border: '1px solid', borderColor: 'divider', borderRadius: 2, background:"transparent" }}>
              <CardContent sx={{ p: 4 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  <Avatar sx={{ bgcolor: 'primary.main', width: 48, height: 48 }}>
                    <PersonIcon />
                  </Avatar>
                  <Box>
                    <Typography variant="h6" fontWeight={600}>
                      Datos Personales
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Información básica del cliente
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                  <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                    <Box sx={{ flex: '1 1 300px' }}>
                      <TextField
                        fullWidth
                        label="Nombres"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            borderRadius: 2,
                          }
                        }}
                      />
                    </Box>
                    <Box sx={{ flex: '1 1 300px' }}>
                      <TextField
                        fullWidth
                        label="Apellidos"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            borderRadius: 2,
                          }
                        }}
                      />
                    </Box>
                  </Box>

                  <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                    <Box sx={{ flex: '1 1 300px' }}>
                      <TextField
                        fullWidth
                        label="DNI"
                        value={formData.dni}
                        onChange={(e) => handleInputChange('dni', e.target.value)}
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            borderRadius: 2,
                          }
                        }}
                      />
                    </Box>
                    <Box sx={{ flex: '1 1 300px' }}>
                      <TextField
                        fullWidth
                        label="Fecha de Nacimiento"
                        type="date"
                        value={formData.birthDate}
                        onChange={(e) => handleInputChange('birthDate', e.target.value)}
                        InputLabelProps={{ shrink: true }}
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            borderRadius: 2,
                          }
                        }}
                      />
                    </Box>
                  </Box>

                  <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                    <Box sx={{ flex: '1 1 300px' }}>
                      <FormControl fullWidth>
                        <InputLabel>Género</InputLabel>
                        <Select
                          value={formData.gender}
                          label="Género"
                          onChange={(e) => handleInputChange('gender', e.target.value)}
                          sx={{ borderRadius: 2 }}
                        >
                          <MenuItem value="masculino">Masculino</MenuItem>
                          <MenuItem value="femenino">Femenino</MenuItem>
                          <MenuItem value="otro">Otro</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                    <Box sx={{ flex: '1 1 300px' }}>
                      {/* Espacio vacío para mantener el layout */}
                    </Box>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          )}

          {activeStep === 1 && (
            <Card elevation={0} sx={{ border: '1px solid', borderColor: 'divider', borderRadius: 2, background:"transparent" }}>
              <CardContent sx={{ p: 4 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  <Avatar sx={{ bgcolor: 'primary.main', width: 48, height: 48 }}>
                    <ContactMailIcon />
                  </Avatar>
                  <Box>
                    <Typography variant="h6" fontWeight={600}>
                      Información de Contacto
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Datos de comunicación del cliente
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                  <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                    <Box sx={{ flex: '1 1 300px' }}>
                      <TextField
                        fullWidth
                        label="Correo Electrónico"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            borderRadius: 2,
                          }
                        }}
                      />
                    </Box>
                    <Box sx={{ flex: '1 1 300px' }}>
                      <TextField
                        fullWidth
                        label="Teléfono Principal"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            borderRadius: 2,
                          }
                        }}
                      />
                    </Box>
                  </Box>

                  <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                    <Box sx={{ flex: '1 1 300px' }}>
                      <TextField
                        fullWidth
                        label="Teléfono Alternativo"
                        value={formData.alternativePhone}
                        onChange={(e) => handleInputChange('alternativePhone', e.target.value)}
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            borderRadius: 2,
                          }
                        }}
                      />
                    </Box>
                    <Box sx={{ flex: '1 1 300px' }}>
                      <TextField
                        fullWidth
                        label="Contraseña"
                        type={showPassword ? 'text' : 'password'}
                        value={formData.password}
                        onChange={(e) => handleInputChange('password', e.target.value)}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton
                                onClick={() => setShowPassword(!showPassword)}
                                edge="end"
                              >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            borderRadius: 2,
                          }
                        }}
                      />
                    </Box>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          )}

          {activeStep === 2 && (
            <Card elevation={0} sx={{ border: '1px solid', borderColor: 'divider', borderRadius: 2 , background:"transparent" }}>
              <CardContent sx={{ p: 4 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  <Avatar sx={{ bgcolor: 'primary.main', width: 48, height: 48 }}>
                    <HomeIcon />
                  </Avatar>
                  <Box>
                    <Typography variant="h6" fontWeight={600}>
                      Dirección
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Ubicación del cliente
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                  <Box>
                    <TextField
                      fullWidth
                      label="Dirección / Calle"
                      value={formData.street}
                      onChange={(e) => handleInputChange('street', e.target.value)}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 2,
                        }
                      }}
                    />
                  </Box>

                  <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                    <Box sx={{ flex: '1 1 300px' }}>
                      <TextField
                        fullWidth
                        label="Distrito"
                        value={formData.district}
                        onChange={(e) => handleInputChange('district', e.target.value)}
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            borderRadius: 2,
                          }
                        }}
                      />
                    </Box>
                    <Box sx={{ flex: '1 1 300px' }}>
                      <TextField
                        fullWidth
                        label="Ciudad"
                        value={formData.city}
                        onChange={(e) => handleInputChange('city', e.target.value)}
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            borderRadius: 2,
                          }
                        }}
                      />
                    </Box>
                  </Box>

                  <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                    <Box sx={{ flex: '1 1 300px' }}>
                      <TextField
                        fullWidth
                        label="Provincia"
                        value={formData.province}
                        onChange={(e) => handleInputChange('province', e.target.value)}
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            borderRadius: 2,
                          }
                        }}
                      />
                    </Box>
                    <Box sx={{ flex: '1 1 300px' }}>
                      <TextField
                        fullWidth
                        label="Código Postal"
                        value={formData.postalCode}
                        onChange={(e) => handleInputChange('postalCode', e.target.value)}
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            borderRadius: 2,
                          }
                        }}
                      />
                    </Box>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          )}

          {activeStep === 3 && (
            <Card elevation={0} sx={{ border: '1px solid', borderColor: 'divider', borderRadius: 2, background:"transparent" }}>
              <CardContent sx={{ p: 4 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  <Avatar sx={{ bgcolor: 'primary.main', width: 48, height: 48 }}>
                    <DescriptionIcon />
                  </Avatar>
                  <Box>
                    <Typography variant="h6" fontWeight={600}>
                      Documentación
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Documentos y archivos del cliente
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                  <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                    <Box sx={{ flex: '1 1 300px' }}>
                      <FormControl fullWidth>
                        <InputLabel>Tipo de Documento</InputLabel>
                        <Select
                          value={formData.documentType}
                          label="Tipo de Documento"
                          onChange={(e) => handleInputChange('documentType', e.target.value)}
                          sx={{ borderRadius: 2 }}
                        >
                          <MenuItem value="dni">DNI</MenuItem>
                          <MenuItem value="pasaporte">Pasaporte</MenuItem>
                          <MenuItem value="ce">Carnet de Extranjería</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                    <Box sx={{ flex: '1 1 300px' }}>
                      <TextField
                        fullWidth
                        label="Número de Documento"
                        value={formData.documentNumber}
                        onChange={(e) => handleInputChange('documentNumber', e.target.value)}
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            borderRadius: 2,
                          }
                        }}
                      />
                    </Box>
                  </Box>

                  <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                    <Box sx={{ flex: '1 1 300px' }}>
                      <TextField
                        fullWidth
                        label="Fecha de Emisión"
                        type="date"
                        value={formData.issueDate}
                        onChange={(e) => handleInputChange('issueDate', e.target.value)}
                        InputLabelProps={{ shrink: true }}
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            borderRadius: 2,
                          }
                        }}
                      />
                    </Box>
                    <Box sx={{ flex: '1 1 300px' }}>
                      <TextField
                        fullWidth
                        label="Fecha de Vencimiento"
                        type="date"
                        value={formData.expiryDate}
                        onChange={(e) => handleInputChange('expiryDate', e.target.value)}
                        InputLabelProps={{ shrink: true }}
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            borderRadius: 2,
                          }
                        }}
                      />
                    </Box>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          )}

          {/* Action Buttons */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
            <Button
              disabled={activeStep === 0}
              onClick={handleBack}
              startIcon={<ArrowBackIcon />}
              variant="outlined"
              sx={{ 
                px: 3,
                borderRadius: 2,
                textTransform: 'none'
              }}
            >
              Anterior
            </Button>
            
            {activeStep === steps.length - 1 ? (
              <Button
                variant="contained"
                startIcon={<SaveIcon />}
                onClick={()=>{
                    router.push("/dashboard")
                }}
                sx={{ 
                  px: 4,
                  py: 1.5,
                  borderRadius: 2,
                  textTransform: 'none',
    background: "linear-gradient(135deg, #4fc3f7 0%, #0288d1 100%)",
                }}
              >
                Guardar Registro
              </Button>
            ) : (
              <Button
                variant="contained"
                onClick={handleNext}
                // endIcon={<ArrowForwardIcon />}
                sx={{ 
                  px: 3,
                  borderRadius: 2,
                  textTransform: 'none'
                }}
              >
                Siguiente
              </Button>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default ClientRegistrationForm;