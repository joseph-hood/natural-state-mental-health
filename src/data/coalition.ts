import type { AstroComponent } from '@lucide/astro';
import Stethoscope from '@lucide/astro/icons/stethoscope';
import Brain from '@lucide/astro/icons/brain';
import Shield from '@lucide/astro/icons/shield';
import Siren from '@lucide/astro/icons/siren';
import HandHeart from '@lucide/astro/icons/hand-heart';
import FlaskConical from '@lucide/astro/icons/flask-conical';
import Hospital from '@lucide/astro/icons/hospital';
import Users from '@lucide/astro/icons/users';

/** Who we are looking for (shown as icon tiles on the home page and the Join page). */
export const memberTypes: { label: string; icon: AstroComponent }[] = [
  { label: 'Doctors', icon: Stethoscope },
  { label: 'Therapists', icon: Brain },
  { label: 'Veterans', icon: Shield },
  { label: 'First responders', icon: Siren },
  { label: 'Patient advocates', icon: HandHeart },
  { label: 'Researchers', icon: FlaskConical },
  { label: 'Healthcare workers', icon: Hospital },
  { label: 'Concerned citizens', icon: Users },
];
