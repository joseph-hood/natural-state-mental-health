import type { AstroComponent } from '@lucide/astro';
import Stethoscope from '@lucide/astro/icons/stethoscope';
import Brain from '@lucide/astro/icons/brain';
import Shield from '@lucide/astro/icons/shield';
import Siren from '@lucide/astro/icons/siren';
import HandHeart from '@lucide/astro/icons/hand-heart';
import FlaskConical from '@lucide/astro/icons/flask-conical';
import Hospital from '@lucide/astro/icons/hospital';
import Users from '@lucide/astro/icons/users';

/** Who we are looking for. `option` is the wording used in the sign-up form. */
export const memberTypes: { label: string; option: string; icon: AstroComponent }[] = [
  { label: 'Doctors', option: 'Doctor', icon: Stethoscope },
  { label: 'Therapists', option: 'Therapist', icon: Brain },
  { label: 'Veterans', option: 'Veteran', icon: Shield },
  { label: 'First responders', option: 'First responder', icon: Siren },
  { label: 'Patient advocates', option: 'Patient advocate', icon: HandHeart },
  { label: 'Researchers', option: 'Researcher', icon: FlaskConical },
  { label: 'Healthcare workers', option: 'Healthcare worker', icon: Hospital },
  { label: 'Concerned citizens', option: 'Concerned citizen', icon: Users },
];

/** Dropdown options in the "I am a…" field. The design lists the citizen option first. */
export const iAmOptions: string[] = [
  'Concerned citizen',
  ...memberTypes.filter((m) => m.option !== 'Concerned citizen').map((m) => m.option),
];
