
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Phone, Lock, UserPlus, LogIn } from "lucide-react";
import { toast } from "sonner";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";

const Login = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showOTPForm, setShowOTPForm] = useState(false);
  const [otp, setOtp] = useState("");
  
  const [loginData, setLoginData] = useState({
    phone: "",
    password: ""
  });
  
  const [registerData, setRegisterData] = useState({
    phone: "",
    password: "",
    confirmPassword: ""
  });
  
  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleRegisterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRegisterData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate login
    setTimeout(() => {
      toast.success("Connexion réussie!");
      setIsSubmitting(false);
      navigate("/");
    }, 1500);
  };
  
  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (registerData.password !== registerData.confirmPassword) {
      toast.error("Les mots de passe ne correspondent pas.");
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate sending OTP
    setTimeout(() => {
      toast.success("Un code de confirmation a été envoyé par SMS.");
      setIsSubmitting(false);
      setShowOTPForm(true);
    }, 1500);
  };
  
  const handleVerifyOTP = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate OTP verification
    setTimeout(() => {
      toast.success("Compte créé avec succès! Vous pouvez maintenant vous connecter.");
      setIsSubmitting(false);
      setShowOTPForm(false);
      setOtp("");
      // Reset to login tab after successful registration
      document.getElementById("login-tab")?.click();
    }, 1500);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-12 bg-gradient-to-r from-amber-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            {showOTPForm ? (
              <Card>
                <CardHeader>
                  <CardTitle>Vérification par SMS</CardTitle>
                  <CardDescription>
                    Entrez le code de confirmation envoyé au {registerData.phone}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleVerifyOTP}>
                    <div className="mb-6">
                      <Label htmlFor="otp">Code de confirmation</Label>
                      <div className="mt-2 flex justify-center">
                        <InputOTP maxLength={6} value={otp} onChange={setOtp}>
                          <InputOTPGroup>
                            <InputOTPSlot index={0} />
                            <InputOTPSlot index={1} />
                            <InputOTPSlot index={2} />
                            <InputOTPSlot index={3} />
                            <InputOTPSlot index={4} />
                            <InputOTPSlot index={5} />
                          </InputOTPGroup>
                        </InputOTP>
                      </div>
                    </div>
                    
                    <div className="flex justify-between gap-4">
                      <Button 
                        type="button" 
                        variant="outline"
                        className="w-full"
                        onClick={() => setShowOTPForm(false)}
                      >
                        Retour
                      </Button>
                      <Button 
                        type="submit" 
                        className="w-full bg-amber-700 hover:bg-amber-800 text-white"
                        disabled={isSubmitting || otp.length < 6}
                      >
                        {isSubmitting ? "Vérification..." : "Vérifier"}
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            ) : (
              <Tabs defaultValue="login">
                <TabsList className="grid w-full grid-cols-2 mb-6">
                  <TabsTrigger value="login" id="login-tab">Se connecter</TabsTrigger>
                  <TabsTrigger value="register">Créer un compte</TabsTrigger>
                </TabsList>
                
                <TabsContent value="login">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-center">Connexion</CardTitle>
                      <CardDescription className="text-center">
                        Connectez-vous à votre compte pour accéder à vos commandes.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={handleLogin}>
                        <div className="space-y-4">
                          <div>
                            <Label htmlFor="login-phone">Numéro de téléphone</Label>
                            <div className="relative mt-1">
                              <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                              <Input 
                                id="login-phone" 
                                name="phone" 
                                type="tel" 
                                placeholder="78 105 42 01" 
                                className="pl-10"
                                value={loginData.phone}
                                onChange={handleLoginChange}
                                required
                              />
                            </div>
                          </div>
                          
                          <div>
                            <Label htmlFor="login-password">Mot de passe</Label>
                            <div className="relative mt-1">
                              <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                              <Input 
                                id="login-password" 
                                name="password" 
                                type="password" 
                                placeholder="••••••••" 
                                className="pl-10"
                                value={loginData.password}
                                onChange={handleLoginChange}
                                required
                              />
                            </div>
                          </div>
                        </div>
                        
                        <Button 
                          type="submit" 
                          className="w-full mt-6 bg-amber-700 hover:bg-amber-800 text-white"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            "Connexion en cours..."
                          ) : (
                            <div className="flex items-center gap-2">
                              <LogIn size={18} />
                              Se connecter
                            </div>
                          )}
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="register">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-center">Créer un compte</CardTitle>
                      <CardDescription className="text-center">
                        Créez votre compte pour profiter de nos services et passer vos commandes.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={handleRegister}>
                        <div className="space-y-4">
                          <div>
                            <Label htmlFor="register-phone">Numéro de téléphone</Label>
                            <div className="relative mt-1">
                              <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                              <Input 
                                id="register-phone" 
                                name="phone" 
                                type="tel" 
                                placeholder="78 105 42 01" 
                                className="pl-10"
                                value={registerData.phone}
                                onChange={handleRegisterChange}
                                required
                              />
                            </div>
                            <p className="text-xs text-gray-500 mt-1">
                              Vous recevrez un SMS de confirmation sur ce numéro.
                            </p>
                          </div>
                          
                          <div>
                            <Label htmlFor="register-password">Mot de passe</Label>
                            <div className="relative mt-1">
                              <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                              <Input 
                                id="register-password" 
                                name="password" 
                                type="password" 
                                placeholder="••••••••" 
                                className="pl-10"
                                value={registerData.password}
                                onChange={handleRegisterChange}
                                required
                                minLength={6}
                              />
                            </div>
                          </div>
                          
                          <div>
                            <Label htmlFor="register-confirm-password">Confirmer le mot de passe</Label>
                            <div className="relative mt-1">
                              <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                              <Input 
                                id="register-confirm-password" 
                                name="confirmPassword" 
                                type="password" 
                                placeholder="••••••••" 
                                className="pl-10"
                                value={registerData.confirmPassword}
                                onChange={handleRegisterChange}
                                required
                                minLength={6}
                              />
                            </div>
                          </div>
                        </div>
                        
                        <Button 
                          type="submit" 
                          className="w-full mt-6 bg-amber-700 hover:bg-amber-800 text-white"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            "Création en cours..."
                          ) : (
                            <div className="flex items-center gap-2">
                              <UserPlus size={18} />
                              Créer mon compte
                            </div>
                          )}
                        </Button>
                      </form>
                    </CardContent>
                    <CardFooter className="text-center text-sm text-gray-500">
                      En créant un compte, vous acceptez nos conditions d'utilisation et notre politique de confidentialité.
                    </CardFooter>
                  </Card>
                </TabsContent>
              </Tabs>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Login;
