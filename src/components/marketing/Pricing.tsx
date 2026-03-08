'use client';
import { useState } from 'react';
import s from '@/styles/marketing.module.css';

const PLANS = [
  {name:'Starter',icon:'🚀',desc:'For solo installers and small teams getting started.',price:{m:0,y:0},period:'Free forever',btnLabel:'Get Started Free',btnStyle:'planBtnOutline',feats:['Up to 50 documents','1 user','2 projects','Basic search','Email support']},
  {name:'Professional',icon:'⚡',desc:'For growing teams that need more power and collaboration.',price:{m:29,y:24},period:'/month',btnLabel:'Start Free Trial',btnStyle:'planBtnPrimary',feats:['Unlimited documents','Up to 10 users','Unlimited projects','Full-text search','Client portals','Digital signatures','Priority support'],pop:true},
  {name:'Business',icon:'🏢',desc:'For established companies with multiple teams and clients.',price:{m:79,y:65},period:'/month',btnLabel:'Start Free Trial',btnStyle:'planBtnOutline',feats:['Everything in Professional','Up to 50 users','Custom branding','Advanced analytics','API access','Dedicated account manager','SSO & SAML']},
  {name:'Enterprise',icon:'🏗',desc:'For large organizations with custom requirements.',price:{m:0,y:0},period:'Custom',btnLabel:'Contact Sales',btnStyle:'planBtnOutline',feats:['Everything in Business','Unlimited users','On-premise option','Custom integrations','SLA guarantee','24/7 phone support','Security audit']},
];

export default function Pricing() {
  const [yearly, setYearly] = useState(true);
  return (
    <section className={s.pricing} id="pricing">
      <div className="wrap tc">
        <div className="sec-tag tag-orange">✦ Pricing</div>
        <h2 className="sec-h2">Simple, <span className="hl-orange">Transparent</span> Pricing</h2>
        <p className="sec-p">Start free, upgrade when you need to. No hidden fees, no contracts.</p>

        <div className={s.pricingToggle}>
          <span className={`${s.toggleLabel} ${!yearly ? s.toggleLabelActive : ''}`}>Monthly</span>
          <button className={s.toggleSwitch} onClick={() => setYearly(!yearly)}>
            <div className={`${s.toggleKnob} ${yearly ? s.toggleKnobActive : ''}`} />
          </button>
          <span className={`${s.toggleLabel} ${yearly ? s.toggleLabelActive : ''}`}>Yearly</span>
          <span className={s.saveBadge}>Save 20%</span>
        </div>

        <div className={s.pricingGrid}>
          {PLANS.map((p,i) => (
            <div key={i} className={`${s.planCard} ${p.pop ? s.planPop : ''}`}>
              {p.pop && <div className={s.planPopTag}>Most Popular</div>}
              <div className={s.planIcon}>{p.icon}</div>
              <div className={s.planName}>{p.name}</div>
              <div className={s.planDesc}>{p.desc}</div>
              <div className={s.planPrice}>
                <span className={s.planAmount}>{p.price.m === 0 ? (p.name === 'Starter' ? '€0' : '') : `€${yearly ? p.price.y : p.price.m}`}</span>
                <span className={s.planPeriod}>{p.period}</span>
              </div>
              <button className={`${s.planBtn} ${s[p.btnStyle]}`}>{p.btnLabel}</button>
              <div className={s.planFeats}>
                {p.feats.map((f,j) => (
                  <div key={j} className={s.planFeat}><span className={s.planCheck}>✓</span>{f}</div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className={s.trustStrip}>
          <div className={s.trustItem}>🔒 GDPR Compliant</div>
          <div className={s.trustItem}>🇳🇱 Dutch Hosted</div>
          <div className={s.trustItem}>💳 No Credit Card Required</div>
          <div className={s.trustItem}>↩ Cancel Anytime</div>
        </div>
      </div>
    </section>
  );
}
