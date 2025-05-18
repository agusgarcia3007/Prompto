import Script from "next/script";

export function Waitlist() {
  return (
    <div className="max-w-[580px]">
      <div
        id="getWaitlistContainer"
        data-waitlist_id="21676"
        data-widget_type="WIDGET_3"
      ></div>
      <link
        rel="stylesheet"
        type="text/css"
        href="https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.css"
      />
      <Script src="https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.js" />
    </div>
  );
}
