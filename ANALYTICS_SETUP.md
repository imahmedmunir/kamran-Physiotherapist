<!-- 
ANALYTICS SETUP GUIDE
Add these codes to your index.html <head> section for tracking
-->

<!-- ====================================
     GOOGLE ANALYTICS 4 (GA4)
     ==================================== -->

<!-- 
Instructions:
1. Go to https://analytics.google.com
2. Sign in with Google account
3. Create new property for your website
4. Replace "G-XXXXXXXXXX" with your Measurement ID
5. Add this code to <head> section of index.html
-->

<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
  
  // Track WhatsApp clicks
  document.addEventListener('click', function(e) {
    if(e.target.closest('a[href*="wa.me"]')) {
      gtag('event', 'whatsapp_click', {
        'phone': '+923332832031'
      });
    }
  });
  
  // Track phone calls
  document.addEventListener('click', function(e) {
    if(e.target.closest('a[href^="tel:"]')) {
      gtag('event', 'phone_call', {
        'phone': e.target.closest('a[href^="tel:"]').href
      });
    }
  });
  
  // Track CTA section engagement
  document.addEventListener('scroll', function() {
    if(window.scrollY > document.body.scrollHeight - 1000) {
      gtag('event', 'cta_section_view', {
        'section': 'strong_cta'
      });
    }
  });
</script>

<!-- ====================================
     GOOGLE SEARCH CONSOLE
     ==================================== -->

<!-- 
Instructions:
1. Go to https://search.google.com/search-console
2. Add property and verify ownership
3. Choose verification method: HTML tag
4. Replace "replace_with_your_verification_code" below
5. Keep this in <head> section
-->

<meta name="google-site-verification" content="replace_with_your_verification_code">

<!-- ====================================
     FACEBOOK PIXEL
     ==================================== -->

<!-- 
Instructions:
1. Create Facebook Business Account
2. Go to Facebook Events Manager
3. Create new Pixel
4. Replace "123456789123456" with your Pixel ID
5. Add this code to <head> section
-->

<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', '123456789123456');
  fbq('track', 'PageView');
</script>
<noscript>
  <img height="1" width="1" style="display:none"
  src="https://www.facebook.com/tr?id=123456789123456&ev=PageView&noscript=1"/>
</noscript>

<!-- ====================================
     HOTJAR - USER BEHAVIOR TRACKING
     ==================================== -->

<!-- 
Instructions:
1. Go to https://www.hotjar.com
2. Sign up and create account
3. Add your website
4. Replace "YOUR_SITE_ID" with your Hotjar Site ID
5. Add this code to <head> section
-->

<script>
    (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:YOUR_SITE_ID,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
</script>

<!-- ====================================
     GOOGLE MAPS (LOCATION)
     ==================================== -->

<!-- 
Instructions:
1. Go to https://cloud.google.com/maps-platform
2. Create project and get API key
3. Replace "YOUR_GOOGLE_MAPS_API_KEY" below
4. Add to body section after footer
-->

<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_MAPS_API_KEY"></script>
<script>
    function initMap() {
        // Latifabad, Hyderabad, Pakistan coordinates
        const clinicLocation = { lat: 24.8607, lng: 68.2677 };
        const map = new google.maps.Map(document.getElementById("map"), {
            zoom: 15,
            center: clinicLocation,
        });
        const marker = new google.maps.Marker({
            position: clinicLocation,
            map: map,
            title: "Kamran Physio Clinic"
        });
    }
    window.addEventListener('load', initMap);
</script>

<!-- ====================================
     CONVERSION TRACKING SETUP
     ==================================== -->

<!--
Add this JavaScript to your script.js file to track conversions:

// Track when user scrolls to CTA section
const ctaSection = document.querySelector('.cta-section');
const ctaObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      gtag('event', 'cta_section_viewed', {
        'section': 'main_cta'
      });
      ctaObserver.unobserve(entry.target);
    }
  });
});
ctaObserver.observe(ctaSection);

// Track time on page
let pageStartTime = new Date().getTime();
window.addEventListener('beforeunload', function() {
  let pageEndTime = new Date().getTime();
  let timeOnPage = (pageEndTime - pageStartTime) / 1000; // in seconds
  
  gtag('event', 'page_duration', {
    'duration': timeOnPage
  });
});
-->

<!-- ====================================
     ALTERNATIVE: SIMPLE FORM SUBMISSION
     ==================================== -->

<!--
If you want a simple contact form, add this to a contact section:

<form id="contact-form" method="POST" action="https://formspree.io/f/YOUR_FORM_ID">
  <input type="email" name="email" placeholder="Your email" required>
  <textarea name="message" placeholder="Your message" required></textarea>
  <button type="submit">Send Message</button>
</form>

Get a free form ID from https://formspree.io
-->

<!-- ====================================
     RECOMMENDED ANALYTICS TOOLS
     ==================================== -->

<!--
1. Google Analytics 4 (FREE)
   - Best for overall traffic and user behavior
   - https://analytics.google.com
   
2. Google Search Console (FREE)
   - Track search performance and keywords
   - https://search.google.com/search-console
   
3. Google My Business (FREE)
   - Local SEO and customer reviews
   - https://www.google.com/business/
   
4. Hotjar (FREE PLAN)
   - See heatmaps of user clicks
   - https://www.hotjar.com
   
5. SEMrush (PAID)
   - Keyword research and competitor analysis
   - https://www.semrush.com
   
6. Ahrefs (PAID)
   - Backlink analysis and SEO audit
   - https://ahrefs.com

START WITH: Google Analytics 4 + Google Search Console (FREE)
-->

<!-- ====================================
     IMPORTANT: PRIVACY POLICY NOTICE
     ==================================== -->

<!--
When you add analytics, you MUST:
1. Create a Privacy Policy page
2. Add cookie consent banner
3. Inform users about tracking
4. Link to privacy policy in footer

Simple cookie banner code:

<div id="cookie-banner" style="position: fixed; bottom: 0; left: 0; right: 0; background: #333; color: white; padding: 20px; z-index: 1000;">
  <p>We use cookies to improve your experience. <a href="/privacy" style="color: #4CAF50;">Learn more</a></p>
  <button onclick="document.getElementById('cookie-banner').style.display='none'; localStorage.setItem('cookies-accepted', true);">Accept</button>
</div>
-->

---

## 📊 KPIs TO MONITOR

Track these metrics in Google Analytics:

1. **Page Views**: How many people visit
2. **Session Duration**: How long they stay
3. **Bounce Rate**: % who leave immediately
4. **Conversion Rate**: % who take action
5. **Traffic Source**: Where visitors come from
6. **Device Type**: Mobile vs Desktop
7. **Top Pages**: Which pages get most traffic
8. **User Flow**: How people navigate

## 🎯 CONVERSION OPTIMIZATION TIPS

1. Monitor which CTA gets clicked most
2. Track where users drop off
3. A/B test button colors and text
4. Optimize images for faster loading
5. Improve mobile experience
6. Add trust badges and certifications
7. Increase number of testimonials
8. Add FAQ section

---

For detailed setup instructions, visit the tools' official documentation.
