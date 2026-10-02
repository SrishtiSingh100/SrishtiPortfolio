import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";

export const ContactSection = () => {
  return (
    <section
      id="contact"
      className="py-24 px-4 relative bg-secondary/30"
    >
      <div className="container mx-auto max-w-5xl">

        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          I’m currently open to software engineering and AI/ML
          opportunities, internships, and technical collaborations.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Contact Information */}
          <div className="space-y-8">

            <h3 className="text-2xl font-semibold mb-6">
              Contact Information
            </h3>

            <div className="space-y-6">

              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>

                <div>
                  <h4 className="font-medium">
                    Email
                  </h4>

                  <a
                    href="mailto:srishtis1013@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    srishtis1013@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>

                <div>
                  <h4 className="font-medium">
                    Phone
                  </h4>

                  <a
                    href="tel:+919971943200"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +91 9971943200
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>

                <div>
                  <h4 className="font-medium">
                    Location
                  </h4>

                  <span className="text-muted-foreground">
                    Delhi, India
                  </span>
                </div>
              </div>

            </div>

            {/* Social Links */}
            <div className="pt-8">

              <h4 className="font-medium mb-4">
                Connect With Me
              </h4>

              <div className="flex space-x-4">

                <a
                  href="https://www.linkedin.com/in/srishtisingh01/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-all duration-300 hover:scale-110"
                >
                  <Linkedin className="h-5 w-5" />
                </a>

                <a
                  href="https://github.com/SrishtiSingh100"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-all duration-300 hover:scale-110"
                >
                  <Github className="h-5 w-5" />
                </a>

                <a
                  href="https://discord.com/users/_srishti_singh_"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Discord"
                  className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-all duration-300 hover:scale-110"
                >
                  <MessageCircle className="h-5 w-5" />
                </a>

              </div>
            </div>
          </div>

          {/* Contact Card */}
          <div className="bg-card p-8 rounded-lg shadow-xs">

            <h3 className="text-2xl font-semibold mb-6">
              Let’s Connect
            </h3>

            <p className="text-muted-foreground leading-relaxed mb-8">
              If you’d like to discuss an internship, software
              engineering opportunity, AI/ML project, or collaboration,
              feel free to reach out.
            </p>

            <a
              href="mailto:srishtis1013@gmail.com?subject=Opportunity%20for%20Srishti%20Singh"
              className="cosmic-button w-full flex items-center justify-center gap-2"
            >
              Send Me an Email
              <Mail size={16} />
            </a>

          </div>

        </div>
      </div>
    </section>
  );
};