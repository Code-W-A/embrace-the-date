
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";
import { Slider } from "./ui/slider";
import { Switch } from "./ui/switch";
import { X, Type, Palette, Filter } from "lucide-react";

interface PersonalizationModalProps {
  open: boolean;
  onClose: () => void;
  settings: PersonalizationSettings;
  onSettingsChange: (settings: PersonalizationSettings) => void;
}

export interface PersonalizationSettings {
  fontSize: number;
  darkMode: boolean;
  showZodiacFilter: boolean;
  preferredZodiacs: string[];
  autoRefresh: boolean;
}

const zodiacSigns = [
  "Berbec", "Taur", "Gemeni", "Rac", "Leu", "Fecioară",
  "Balanță", "Scorpion", "Săgetător", "Capricorn", "Vărsător", "Pești"
];

export default function PersonalizationModal({ 
  open, 
  onClose, 
  settings, 
  onSettingsChange 
}: PersonalizationModalProps) {
  const [localSettings, setLocalSettings] = useState<PersonalizationSettings>(settings);

  const handleSave = () => {
    onSettingsChange(localSettings);
    onClose();
  };

  const toggleZodiac = (zodiac: string) => {
    const newPreferred = localSettings.preferredZodiacs.includes(zodiac)
      ? localSettings.preferredZodiacs.filter(z => z !== zodiac)
      : [...localSettings.preferredZodiacs, zodiac];
    
    setLocalSettings({ ...localSettings, preferredZodiacs: newPreferred });
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-md max-h-[80vh] overflow-y-auto bg-white/95 backdrop-blur-sm border border-white/20 rounded-3xl p-0">
        <DialogHeader className="p-6 pb-4 border-b border-gray-100">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-lg font-semibold">Personalizare</DialogTitle>
            <Button variant="ghost" size="sm" onClick={onClose} className="rounded-full">
              <X className="w-4 h-4" />
            </Button>
          </div>
        </DialogHeader>

        <div className="p-6 space-y-6">
          {/* Font Size */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Type className="w-5 h-5 text-gray-600" />
              <h3 className="font-medium">Mărimea textului</h3>
            </div>
            <div className="space-y-2">
              <Slider
                value={[localSettings.fontSize]}
                onValueChange={([value]) => setLocalSettings({ ...localSettings, fontSize: value })}
                min={12}
                max={20}
                step={1}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-gray-500">
                <span>Mic</span>
                <span>Normal</span>
                <span>Mare</span>
              </div>
              <p 
                className="text-gray-600 mt-2" 
                style={{ fontSize: `${localSettings.fontSize}px` }}
              >
                Previzualizare text la mărimea selectată
              </p>
            </div>
          </div>

          {/* Theme */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Palette className="w-5 h-5 text-gray-600" />
              <h3 className="font-medium">Temă</h3>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Mod întunecat</span>
              <Switch
                checked={localSettings.darkMode}
                onCheckedChange={(checked) => setLocalSettings({ ...localSettings, darkMode: checked })}
              />
            </div>
          </div>

          {/* Zodiac Filter */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-600" />
              <h3 className="font-medium">Filtrare feed</h3>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Arată filtrul zodiac</span>
              <Switch
                checked={localSettings.showZodiacFilter}
                onCheckedChange={(checked) => setLocalSettings({ ...localSettings, showZodiacFilter: checked })}
              />
            </div>

            {localSettings.showZodiacFilter && (
              <div>
                <p className="text-sm text-gray-600 mb-3">Zodii preferate pentru feed:</p>
                <div className="grid grid-cols-3 gap-2">
                  {zodiacSigns.map((zodiac) => (
                    <Button
                      key={zodiac}
                      variant={localSettings.preferredZodiacs.includes(zodiac) ? "default" : "outline"}
                      size="sm"
                      onClick={() => toggleZodiac(zodiac)}
                      className="text-xs"
                    >
                      {zodiac}
                    </Button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Auto Refresh */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Actualizare automată</span>
              <Switch
                checked={localSettings.autoRefresh}
                onCheckedChange={(checked) => setLocalSettings({ ...localSettings, autoRefresh: checked })}
              />
            </div>
          </div>
        </div>

        <div className="p-6 pt-0">
          <div className="flex space-x-3">
            <Button variant="outline" onClick={onClose} className="flex-1">
              Anulează
            </Button>
            <Button onClick={handleSave} className="flex-1 bg-purple-500 hover:bg-purple-600">
              Salvează
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
