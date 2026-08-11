import {
  Mail,
  Phone,
  MapPin,
  Globe,
  Clock,
  Camera,
BriefcaseBusiness,
Code2
} from "lucide-react";

export default function ContactInfo() {
  return (
    <div>
      <p className="uppercase tracking-[0.4em] text-[#D4AF37]">
        Contact Information
      </p>

      <h2 className="mt-6 text-4xl font-bold">
        Let's start the conversation.
      </h2>

      <p className="mt-6 text-lg leading-8 text-gray-400">
        Have a question or want to discuss a project? Reach out using the
        information below or send us a message. We typically respond within one
        business day.
      </p>

      <div className="mt-12 space-y-8">

        {/* Email */}
        <div className="flex items-start gap-5">
          <Mail className="mt-1 h-6 w-6 text-[#D4AF37]" />

          <div>
            <h3 className="font-semibold text-white">Email</h3>

            <a
              href="mailto:fltp8125@gmail.com"
              className="text-gray-400 transition hover:text-[#D4AF37]"
            >
              fltp8125@gmail.com
            </a>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-start gap-5">
          <Phone className="mt-1 h-6 w-6 text-[#D4AF37]" />

          <div>
            <h3 className="font-semibold text-white">Phone</h3>

            <a
              href="tel:+12675812282"
              className="text-gray-400 transition hover:text-[#D4AF37]"
            >
              (267) 581-2282
            </a>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-start gap-5">
          <MapPin className="mt-1 h-6 w-6 text-[#D4AF37]" />

          <div>
            <h3 className="font-semibold text-white">Location</h3>

            <p className="text-gray-400">
              Pennsylvania, USA
            </p>

            <p className="text-sm text-gray-500">
              Serving clients remotely nationwide.
            </p>
          </div>
        </div>

        {/* Response Time */}
        <div className="flex items-start gap-5">
          <Clock className="mt-1 h-6 w-6 text-[#D4AF37]" />

          <div>
            <h3 className="font-semibold text-white">
              Response Time
            </h3>

            <p className="text-gray-400">
              Within 1 business day
            </p>
          </div>
        </div>
      </div>

      {/* Socials */}
      <div className="mt-10 space-y-4">

          <h3 className="uppercase tracking-[0.3em] text-[#D4AF37]">
          Connect
        </h3>
            <a
              href="https://fromlondontoparis.com"
              target="_blank"
              className="flex items-center gap-3 text-gray-300 transition hover:text-[#D4AF37]"
            >
              <Globe className="h-5 w-5" />
              <span>Website</span>
            </a>

            <a
              href="https://linkedin.com/in/YOUR-LINKEDIN"
              target="_blank"
              className="flex items-center gap-3 text-gray-300 transition hover:text-[#D4AF37]"
            >
              <BriefcaseBusiness className="h-5 w-5" />
              <span>LinkedIn</span>
            </a>

            <a
              href="https://github.com/alogan15"
              target="_blank"
              className="flex items-center gap-3 text-gray-300 transition hover:text-[#D4AF37]"
            >
              <Code2 className="h-5 w-5" />
              <span>GitHub</span>
            </a>

            <a
              href="https://instagram.com/YOUR-INSTAGRAM"
              target="_blank"
              className="flex items-center gap-3 text-gray-300 transition hover:text-[#D4AF37]"
            >
              <Camera className="h-5 w-5" />
              <span>Instagram</span>
            </a>
          </div>
    </div>
  );
}