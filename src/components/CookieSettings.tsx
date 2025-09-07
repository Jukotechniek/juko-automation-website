import { useState } from 'react';
import { useCookieConsent } from '@/hooks/useCookieConsent';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

const CookieSettings = () => {
  const { consent, analyticsAccepted, acceptAnalytics, declineAnalytics, clearConsent } = useCookieConsent();
  const [open, setOpen] = useState(false);

  const handleAnalyticsToggle = (checked: boolean) => {
    if (checked) {
      acceptAnalytics();
    } else {
      declineAnalytics();
    }
  };

  const handleSaveSettings = () => {
    setOpen(false);
  };

  const handleClearAll = () => {
    clearConsent();
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          Cookie Instellingen
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Cookie Instellingen</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="analytics-cookies">Analytische Cookies</Label>
              <p className="text-sm text-muted-foreground">
                Deze cookies helpen ons de website te verbeteren door anonieme gegevens te verzamelen.
              </p>
            </div>
            <Switch
              id="analytics-cookies"
              checked={analyticsAccepted}
              onCheckedChange={handleAnalyticsToggle}
            />
          </div>
          
          <div className="flex justify-between pt-4">
            <Button variant="outline" onClick={handleClearAll}>
              Alles wissen
            </Button>
            <Button onClick={handleSaveSettings}>
              Instellingen opslaan
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CookieSettings;
