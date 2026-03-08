import s from '@/styles/marketing.module.css';

export default function Newsletter() {
  return (
    <section className={s.newsletter}>
      <div className="wrap">
        <div className={s.nlInner}>
          <div>
            <div className={s.nlTitle}>Stay Updated with Instadocu</div>
            <div className={s.nlSub}>Weekly tips on document management, product updates & industry news.</div>
          </div>
          <form className={s.nlForm} onSubmit={(e) => e.preventDefault()}>
            <input className={s.nlInput} placeholder="Your email address" type="email" />
            <button className={s.nlBtn} type="submit">Subscribe</button>
          </form>
        </div>
      </div>
    </section>
  );
}
