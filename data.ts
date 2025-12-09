import { Project, Testimonial, ServiceItem, ProcessStep } from './types';



export const GALLERY_ITEMS: Project[] = [
  {
    id: '1',
    title: 'Eiche Massivholztisch "Familienzeit"',
    category: 'Tische',
    description: 'Ein robuster Esstisch aus wilder Eiche mit Baumkante, geölt für Langlebigkeit.',
    fullDescription: 'Dieser Tisch bildet das Herzstück des Esszimmers. Gefertigt aus 300 Jahre alter Eiche, bewahrt er die Geschichte des Baumes. Die Oberfläche wurde dreifach mit Hartwachsöl behandelt.',
    imageUrl: 'https://images.pexels.com/photos/890669/pexels-photo-890669.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    // TODO: eigenes Bild: imageUrl: '/gallery/tisch-eiche.jpg'
    tags: ['Eiche', 'Baumkante', 'Geölt', 'Stahlgestell'],
  },
  {
  id: '2',
  title: 'Schwebendes Bett "Traumfänger"',
  category: 'Betten',
  description: 'Zirbenholzbett mit unsichtbarer Unterkonstruktion und integrierten Nachttischen.',
  fullDescription: 'Das Zirbenholz verströmt einen beruhigenden Duft, der den Schlaf fördert. Die schwebende Optik lässt das massive Möbelstück leicht und modern wirken.',
  imageUrl: 'https://drive.usercontent.google.com/download?id=15iV38nsdalGLHbm24xWM40nWfMxEiiuZ&export=view&authuser=0',
  // TODO: eigenes Bild: imageUrl: '/gallery/bett-zirbe.jpg'
  tags: ['Zirbe', 'Metallfrei', 'Modern'],
},
  {
    id: '3',
    title: 'Landhausküche "Dresdner Elbe"',
    category: 'Küchen',
    description: 'Vollmassive Küche aus Ahorn und Nussbaum, angepasst an schräge Wände.',
    imageUrl: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    // TODO: eigenes Bild: imageUrl: '/gallery/kueche-ahorn.jpg'
    tags: ['Ahorn', 'Nussbaum', 'Maßanfertigung'],
  },
  {
    id: '4',
    title: 'Bibliotheksregal mit Leiter',
    category: 'Schränke & Regale',
    description: 'Raumhohes Bücherregal aus weiß gekalkter Esche inklusive verschiebbarer Leiter.',
    imageUrl: 'https://images.pexels.com/photos/4846461/pexels-photo-4846461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    // TODO: eigenes Bild: imageUrl: '/gallery/regal-esche.jpg'
    tags: ['Esche', 'Weißöl', 'Bibliothek'],
  },
  {
    id: '5',
    title: 'Gartentisch "Sommernacht"',
    category: 'Außenbereich',
    description: 'Wetterfester Teak-Tisch für die große Terrasse, Platz für 12 Personen.',
    imageUrl: 'https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    // TODO: eigenes Bild: imageUrl: '/gallery/garten-teak.jpg'
    tags: ['Teak', 'Outdoor', 'Wetterfest'],
  },
  {
    id: '6',
    title: 'Sideboard "Mid-Century Modern"',
    category: 'Schränke & Regale',
    description: 'Elegantes Sideboard aus Kirschbaum mit klassischen Linien und viel Stauraum.',
    imageUrl: 'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    // TODO: eigenes Bild: imageUrl: '/gallery/sideboard-kirsche.jpg'
    tags: ['Kirschbaum', 'Retro', 'Wohnzimmer'],
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: '1',
    title: 'Maßgefertigte Tische',
    description: 'Vom massiven Esstisch bis zum filigranen Couchtisch. Wir fertigen Ihr Unikat passend zu Ihrem Raum.',
    iconName: 'Table',
  },
  {
    id: '2',
    title: 'Schränke & Regale',
    description: 'Intelligente Stauraumlösungen, Einbauschränke für Dachschrägen und repräsentative Bibliotheken.',
    iconName: 'Cabinet',
  },
  {
    id: '3',
    title: 'Betten & Schlafräume',
    description: 'Metallfreie Massivholzbetten für gesunden Schlaf. Zirbe, Eiche oder Buche nach Ihrem Wunsch.',
    iconName: 'Bed',
  },
  {
    id: '4',
    title: 'Küchen & Essbereiche',
    description: 'Langlebige Küchen aus Vollholz. Robust, hygienisch und mit modernster Technik ausgestattet.',
    iconName: 'Utensils',
  },
  {
    id: '5',
    title: 'Objekt & Praxis',
    description: 'Empfangstresen, Wartezimmer und Büromöbel, die Kompetenz und Wärme ausstrahlen.',
    iconName: 'Trees', // Using Trees as abstraction for "Environment"
  },
  {
    id: '6',
    title: 'Individuelle Projekte',
    description: 'Sie haben eine Skizze oder eine vage Idee? Wir setzen auch ungewöhnliche Wünsche um.',
    iconName: 'Hammer',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Anna & Markus Weber',
    text: 'Unser neuer Esstisch ist ein absoluter Traum. Die Beratung war herzlich und kompetent, und man spürt die Liebe zum Detail in jedem Zentimeter Holz.',
    imageUrl: 'https://images.pexels.com/photos/1139743/pexels-photo-1139743.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1'
    // TODO: eigenes Bild: imageUrl: '/testimonials/kunde1.jpg'
  },
  {
    id: '2',
    name: 'Dr. Stefan Richter',
    text: 'Für meine Praxis wollte ich einen Empfangstresen, der nicht steril wirkt. Das Ergebnis hat meine Erwartungen übertroffen. Handwerk auf höchstem Niveau.',
    imageUrl: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1'
    // TODO: eigenes Bild: imageUrl: '/testimonials/kunde2.jpg'
  },
  {
    id: '3',
    name: 'Familie S.',
    text: 'Das Hochbett für unsere Kinder ist super stabil und wunderschön verarbeitet. Endlich ein Möbelstück, das Generationen überdauern wird.',
    // Kein Bild hier, um Fallback-Design zu testen (Standard-Icon)
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Beratung',
    description: 'Wir besprechen Ihre Wünsche, messen vor Ort auf und wählen erste Hölzer aus.'
  },
  {
    number: '02',
    title: 'Entwurf',
    description: 'Sie erhalten detaillierte Zeichnungen und ein Angebot für Ihr individuelles Möbelstück.'
  },
  {
    number: '03',
    title: 'Auswahl',
    description: 'Sie suchen sich "Ihr" Holz direkt bei uns aus. Jedes Brett ist einzigartig.'
  },
  {
    number: '04',
    title: 'Fertigung',
    description: 'In unserer Dresdner Werkstatt entsteht Ihr Möbel in präziser Handarbeit.'
  },
  {
    number: '05',
    title: 'Montage',
    description: 'Wir liefern und bauen fachgerecht bei Ihnen auf. Sauber und pünktlich.'
  }
];

export const IMAGES = {
  hero: 'https://images.pexels.com/photos/1249611/pexels-photo-1249611.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1',
  // TODO: eigenes Bild: hero: '/hero/werkstatt-bg.jpg'
  about: 'https://images.pexels.com/photos/6474343/pexels-photo-6474343.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&dpr=1',
  // TODO: eigenes Bild: about: '/team/meister.jpg'
  materials: 'https://images.pexels.com/photos/129733/pexels-photo-129733.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
  // TODO: eigenes Bild: materials: '/materials/holzstruktur.jpg'
  contact: 'https://images.pexels.com/photos/2079246/pexels-photo-2079246.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
  // TODO: eigenes Bild: contact: '/contact/dresden-karte.jpg'
};