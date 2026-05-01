# FeaturePin — Product Knowledge

## Descripció en una frase

Eina simple que permet a equips de SaaS comunicar-se amb els seus usuaris dins del producte — sense pagar els $174/mes de Userguiding ni assumir la seva complexitat.

---

## El problema

Els equips de producte de SaaS petites (10-80 persones) necessiten dues coses:

1. **Announcements** — Comunicar novetats als usuaris dins del producte (modal, banner, tooltip) sense haver de demanar-ho a l'equip d'enginyeria cada cop.
2. **Nudges** — Detectar automàticament quan un usuari no ha provat una feature i enviar-li un missatge in-app per activar-la.

Avui o paguen Userguiding/Appcues (massa car i complex) o no ho fan.

---

## La solució

Un **SDK de JavaScript** que s'instal·la una sola vegada al producte del client (1 snippet, com Intercom). Des d'un dashboard simple:

- **Announce mode**: Crees un modal/banner/tooltip i el llances manualment a tots els usuaris o a un segment. Sense tocar codi.
- **Nudge mode**: Defineixes una regla ("si l'usuari no ha obert la secció X en 14 dies → mostra aquest tooltip"). L'eina ho fa sol.

---

## Proposta de valor

> "Userguiding fa 15 coses. Nosaltres en fem 2, perfectament."

Tagline alternatiu (ChatGPT):
> "Your roadmap is useless if nobody sees it."

---

## Públic objectiu

### Segment de mercat

**SMB SaaS** — empreses de software com a servei d'entre 10 i 80 persones, amb producte llançat i base d'usuaris activa.

No és el mercat enterprise (Pendo, WalkMe). No és el freelancer o el projecte personal. És l'empresa que ja té PMF, ja cobra als seus usuaris, i necessita comunicar-se amb ells dins del producte sense dependre d'enginyeria cada cop.

---

### Perfils compradors (qui paga i qui decideix)

#### 1. Product Manager / Product Owner
**El perfil principal.** Gestiona el roadmap i sap que els usuaris no descobreixen les features que publica. Frustrat perquè per llançar un simple modal necessita demanar-ho a enginyeria i esperar un sprint.

- Responsabilitats: roadmap, releases, adopció de features, comunicació de canvis
- Pain directe: "vaig publicar la feature fa 3 setmanes i la meitat dels usuaris ni saben que existeix"
- Trigger de compra: acaba de llançar una feature important i vol assegurar-se que tots els usuaris la veuen
- Eines que ja usa: Jira, Linear, Figma, Mixpanel o Amplitude, Intercom
- Objecció principal: "ho hauria de poder instal·lar enginyeria en menys d'una hora"

#### 2. CEO de SaaS (early-stage, fins a 30 persones)
**El decisor en empreses petites.** Quan no hi ha Head of Product, el CEO porta el producte. Vol que els usuaris adoptin features sense haver de trucar a tothom manualment.

- Responsabilitats: tot — producte, vendes, creixement
- Pain directe: churn perquè els usuaris no entenen el valor complet del producte
- Trigger de compra: un client cancel·la i descobreix que no sabia que existia una feature que hauria resolt el seu problema
- Eines que ja usa: Stripe, Intercom, alguna eina d'analytics
- Objecció principal: "no tinc temps per configurar una eina complexa"

#### 3. Head of Product / VP of Product
**El comprador en empreses de 30-80 persones.** Té equip de PMs i vol una eina estàndard per a tots. Pren la decisió de compra però necessita que enginyeria l'aprovi tècnicament.

- Responsabilitats: estratègia de producte, adopció, mètriques d'activació
- Pain directe: la taxa d'adopció de features és baixa i no sap com millorar-la sense augmentar el headcount
- Trigger de compra: OKR de feature adoption que no s'està complint
- Eines que ja usa: Pendo (massa car), Fullstory, Mixpanel, Amplitude
- Objecció principal: "quin és l'esforç d'integració per al meu equip d'enginyeria?"

---

### Empresa ideal

| Criteri | Rang ideal |
|---|---|
| Mida de l'empresa | 10–80 persones |
| ARR | $300K–$5M |
| Fase | Post-PMF, creixement actiu |
| Usuaris finals (MAU) | 500–10.000 |
| Sector | SaaS B2B o B2B2C |
| Eina d'analytics | Mixpanel, Amplitude, o similar |
| Maduresa tècnica | Equip d'enginyeria capaç d'instal·lar un snippet |

**No és el client ideal:**
- Empreses sense base d'usuaris activa (early-stage pre-PMF)
- Enterprise (+500 persones) — necessiten Pendo o WalkMe
- SaaS sense equip tècnic que pugui instal·lar el SDK
- Productes mobile-only (el SDK és web)

---

### Comprador ideal (ICP resumit)

- **Rol**: Product Manager, Product Owner, o CEO de SaaS
- **Empresa**: SaaS B2B de 10-80 persones, $300K–$5M ARR, post-PMF
- **Context**: ja usa una eina d'analytics, té base d'usuaris activa
- **Pain**: usuaris que no descobreixen features noves; no pot pagar Pendo ($20K+/any) ni vol la complexitat de Userguiding

---

## Model de negoci

- **Model**: freemium, sense trial. L'usuari entra pel free i paga quan supera el límit de MAU
- **Free**: 1.000 MAU, branding FeaturePin, totes les features
- **Grow**: $29/mes fins a 10.000 MAU, sense branding
- **Scale**: $79/mes fins a 25.000 MAU
- **Enterprise**: preu a mida (25.000+ MAU)
- **Objectiu**: €5.000 MRR = ~170 clients Grow
- **Pagament**: targeta de crèdit, Stripe

---

## Canals de marketing

- LinkedIn: "Head of Product", "Product Manager" a SaaS de 10-200 persones
- Reddit: r/SaaS, r/ProductManagement
- Cold email a empreses que usen Segment o Mixpanel
- ProductHunt launch
- SEO: "feature adoption tool", "in-app messaging for SaaS", "userguiding alternative"

---

## Per què ara

Userguiding ha fet feature creep massiu (session replay, knowledge base, AI assistant) per justificar preus enterprise. Ha abandonat voluntàriament el segment SMB. El mercat de 10-80 persones queda sense eina adequada.

---

## Abast del MVP

**Inclòs:**
- SDK JavaScript (1 snippet, instal·lació en 5 minuts)
- Dashboard: crear missatges (modal, banner, tooltip)
- Targeting bàsic: tots els usuaris, o per propietat (plan, signup date)
- Announce mode: llançament manual
- Nudge mode: trigger per "no ha visitat URL X en N dies"
- Analytics: impressions, clics, dismissals

**Fora del MVP:**
- A/B testing
- Segmentació avançada (Mixpanel/Amplitude integrations)
- Mobile
- Múltiples idiomes

---

## Riscos principals

1. **SDK requereix developer per instal·lar**: el PM és el comprador però enginyeria ha d'instal·lar el snippet. Mitigació: fer-ho tan simple com possible (copy-paste d'1 línia + npm package).
2. **El moat real és la segmentació**: mostrar el missatge correcte a l'usuari correcte en el moment correcte és la diferenciació real. Cal prioritzar-ho aviat.
3. **Beamer pot afegir behavioral triggers**: porta anys sense fer-ho, però és possible.

---

## Marca i domini

- **Nom**: FeaturePin
- **Domini**: featurepin.com (comprat 30 abril 2026, €15,95)
- **Reasoning**: "Feature" connecta directament amb PMs. "Pin" evoca fixar, destacar, posar en primer pla.

---

## Competidors clau

| Eina | Preu/mes | Announces | Nudges | Complexitat |
|---|---|:---:|:---:|---|
| Pendo | $1.500+ | ✅ | ✅ | Molt alta |
| Userguiding | $174–349 | ✅ | ✅ | Alta |
| Beamer | €49–149 | ✅ | ❌ | Baixa |
| **FeaturePin** | **€79** | **✅** | **✅** | **Mínima** |

**Gap que omplim**: entre Beamer (€49, sense nudges) i Userguiding ($174, complex) no hi ha res simple amb les dues funcionalitats per al segment SMB.
