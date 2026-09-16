"use client";

import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "motion/react";
import {
  FormEvent,
  useEffect,
  useState,
} from "react";

import TabakDepotMark from "@/components/ui/TabakDepotMark";

type InquiryModalProps = {
  open: boolean;
  onClose: () => void;
  selectedPackage?: string;
};

type FormData = {
  package: string;
  name: string;
  email: string;
  phone: string;
  date: string;
  guests: string;
  location: string;
  whiskyPairing: string;
  message: string;
};

const packageOptions = [
  {
    value: "",
    label: "Noch nicht entschieden",
  },
  {
    value: "box",
    label: "Die Zigarrenbox",
  },
  {
    value: "event",
    label: "Das Event-Paket",
  },
  {
    value: "premium",
    label: "Private Service",
  },
];

const whiskyOptions = [
  {
    value: "recommendation",
    title: "Ja, gerne",
    text: "Mit Whisky-Empfehlung",
  },
  {
    value: "cigars-only",
    title: "Nur Zigarren",
    text: "Ohne Spirituosen",
  },
  {
    value: "advice",
    title: "Gerne beraten",
    text: "Noch nicht entschieden",
  },
];

export default function InquiryModal({
  open,
  onClose,
  selectedPackage = "",
}: InquiryModalProps) {
  const reduceMotion = useReducedMotion();

  const [formData, setFormData] =
    useState<FormData>({
      package: selectedPackage,
      name: "",
      email: "",
      phone: "",
      date: "",
      guests: "",
      location: "",
      whiskyPairing: "",
      message: "",
    });

  const [submitted, setSubmitted] =
    useState(false);

  const [isSubmitting, setIsSubmitting] =
    useState(false);

  useEffect(() => {
    if (!open) return;

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow =
        previousOverflow;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (
      event: KeyboardEvent
    ) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [open, onClose]);

  const updateField = (
    field: keyof FormData,
    value: string
  ) => {
    setFormData((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    setIsSubmitting(true);

    /*
     * Temporary simulation.
     *
     * Later this can be replaced with:
     *
     * await fetch("/api/inquiry", {
     *   method: "POST",
     *   headers: {
     *     "Content-Type": "application/json",
     *   },
     *   body: JSON.stringify(formData),
     * });
     */

    await new Promise((resolve) =>
      setTimeout(resolve, 700)
    );

    console.log("Inquiry:", formData);

    setIsSubmitting(false);
    setSubmitted(true);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.25,
          }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-3 md:p-5"
        >
          {/* BACKDROP */}
          <motion.button
            type="button"
            aria-label="Anfrage schließen"
            onClick={onClose}
            className="absolute inset-0 cursor-default bg-[#0d0b09]/70 backdrop-blur-[6px]"
          />

          {/* MODAL */}
          <motion.div
            initial={
              reduceMotion
                ? { opacity: 0 }
                : {
                    opacity: 0,
                    y: 30,
                    scale: 0.99,
                  }
            }
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={
              reduceMotion
                ? { opacity: 0 }
                : {
                    opacity: 0,
                    y: 20,
                    scale: 0.99,
                  }
            }
            transition={{
              duration: 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="inquiry-title"
            className="relative z-10 max-h-[94svh] w-full max-w-[1080px] overflow-y-auto bg-[var(--cream)] text-[var(--ink)] shadow-2xl"
          >
            {/* CLOSE */}
            <button
              type="button"
              onClick={onClose}
              className="group absolute right-5 top-5 z-30 flex h-9 w-9 items-center justify-center border border-black/15 bg-[var(--cream)] transition-colors hover:bg-white md:right-6 md:top-6"
              aria-label="Schließen"
            >
              <span className="relative block h-4 w-4">
                <span className="absolute left-0 top-1/2 h-px w-4 rotate-45 bg-black" />
                <span className="absolute left-0 top-1/2 h-px w-4 -rotate-45 bg-black" />
              </span>
            </button>

            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 1 }}
                  exit={{
                    opacity: 0,
                    y: reduceMotion ? 0 : -10,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                  className="px-6 py-8 md:px-10 md:py-10 lg:px-12"
                >
                  {/* HEADER */}
                  <div className="grid gap-5 pr-12 md:grid-cols-[1fr_280px] md:items-end">
                    <div>
                      <p className="eyebrow text-[var(--muted-dark)]">
                        Event-Anfrage
                      </p>

                      <h2
                        id="inquiry-title"
                        className="mt-4 font-display font-medium leading-[0.9] tracking-[-0.04em]"
                        style={{
                          fontSize:
                            "clamp(3rem, 5vw, 5rem)",
                        }}
                      >
                        Erzählen Sie uns von
                        <br />
                        Ihrem{" "}
                        <span className="italic text-[var(--muted-dark)]">
                          Anlass.
                        </span>
                      </h2>
                    </div>

                    <p className="max-w-[280px] text-xs leading-5 text-[var(--muted-dark)]">
                      Wir stellen Zigarren, Service und
                      auf Wunsch das passende Pairing
                      individuell für Sie zusammen.
                    </p>
                  </div>

                  {/* FORM */}
                  <div className="mt-8 rounded-sm border border-black/10 bg-white/25 p-4 md:p-6">
                    {/* PACKAGE + DATE */}
                    <div className="grid gap-4 md:grid-cols-2">
                      <SelectField
                        id="package"
                        label="Gewünschtes Erlebnis"
                        value={formData.package}
                        onChange={(value) =>
                          updateField(
                            "package",
                            value
                          )
                        }
                        options={packageOptions}
                      />

                      <Field
                        id="date"
                        label="Datum"
                        type="date"
                        value={formData.date}
                        onChange={(value) =>
                          updateField(
                            "date",
                            value
                          )
                        }
                      />
                    </div>

                    {/* CONTACT DATA */}
                    <div className="mt-4 grid gap-4 md:grid-cols-2">
                      <Field
                        id="name"
                        label="Name"
                        required
                        value={formData.name}
                        onChange={(value) =>
                          updateField(
                            "name",
                            value
                          )
                        }
                        placeholder="Ihr Name"
                      />

                      <Field
                        id="email"
                        label="E-Mail"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(value) =>
                          updateField(
                            "email",
                            value
                          )
                        }
                        placeholder="name@beispiel.de"
                      />

                      <Field
                        id="phone"
                        label="Telefon"
                        type="tel"
                        value={formData.phone}
                        onChange={(value) =>
                          updateField(
                            "phone",
                            value
                          )
                        }
                        placeholder="+49 ..."
                      />

                      <div className="grid grid-cols-[0.7fr_1.3fr] gap-4">
                        <Field
                          id="guests"
                          label="Gäste"
                          type="number"
                          value={formData.guests}
                          onChange={(value) =>
                            updateField(
                              "guests",
                              value
                            )
                          }
                          placeholder="50"
                        />

                        <Field
                          id="location"
                          label="Veranstaltungsort"
                          value={formData.location}
                          onChange={(value) =>
                            updateField(
                              "location",
                              value
                            )
                          }
                          placeholder="Minden"
                        />
                      </div>
                    </div>

                    {/* WHISKY */}
                    <div className="mt-6">
                      <div className="mb-3 flex items-center gap-3">
                        <p className="text-[9px] font-medium uppercase tracking-[0.18em] text-[var(--muted-dark)]">
                          Passende Whisky-Ergänzung?
                        </p>

                        <span className="text-[8px] uppercase tracking-[0.18em] text-black/30">
                          Optional
                        </span>
                      </div>

                      <div className="grid gap-2 sm:grid-cols-3">
                        {whiskyOptions.map(
                          (option) => {
                            const selected =
                              formData.whiskyPairing ===
                              option.value;

                            return (
                              <button
                                key={option.value}
                                type="button"
                                onClick={() =>
                                  updateField(
                                    "whiskyPairing",
                                    selected
                                      ? ""
                                      : option.value
                                  )
                                }
                                className={`relative flex min-h-[72px] items-center gap-3 border px-4 py-3 text-left transition-all duration-250 ${
                                  selected
                                    ? "border-[var(--ink)] bg-[var(--ink)] text-[var(--cream)]"
                                    : "border-black/10 bg-[var(--cream)] hover:border-black/25"
                                }`}
                              >
                                {/* RADIO */}
                                <span
                                  className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full border ${
                                    selected
                                      ? "border-white/50"
                                      : "border-black/25"
                                  }`}
                                >
                                  {selected && (
                                    <span className="h-1.5 w-1.5 rounded-full bg-white" />
                                  )}
                                </span>

                                <span>
                                  <span className="block font-display text-lg font-medium leading-none">
                                    {option.title}
                                  </span>

                                  <span
                                    className={`mt-1.5 block text-[10px] leading-4 ${
                                      selected
                                        ? "text-white/45"
                                        : "text-[var(--muted-dark)]"
                                    }`}
                                  >
                                    {option.text}
                                  </span>
                                </span>
                              </button>
                            );
                          }
                        )}
                      </div>
                    </div>

                    {/* MESSAGE */}
                    <div className="mt-5">
                      <label
                        htmlFor="message"
                        className="mb-2 block text-[9px] font-medium uppercase tracking-[0.18em] text-[var(--muted-dark)]"
                      >
                        Wünsche & Details
                      </label>

                      <textarea
                        id="message"
                        value={formData.message}
                        onChange={(event) =>
                          updateField(
                            "message",
                            event.target.value
                          )
                        }
                        rows={3}
                        placeholder="Erzählen Sie uns kurz von Ihrem Anlass oder besonderen Wünschen ..."
                        className="w-full resize-none border border-black/10 bg-[var(--cream)] px-4 py-3 text-sm leading-5 outline-none transition-colors placeholder:text-black/25 focus:border-black/40"
                      />
                    </div>
                  </div>

                  {/* FOOTER / SUBMIT */}
                  <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-[9px] leading-4 text-[var(--muted-dark)]/60">
                        * Pflichtfelder
                      </p>

                      <p className="mt-1 text-[9px] leading-4 text-[var(--muted-dark)]/50">
                        Rückmeldung in der Regel
                        innerhalb von 48 Stunden.
                      </p>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group inline-flex shrink-0 items-center justify-center gap-5 bg-[var(--ink)] px-7 py-4 text-[9px] font-semibold uppercase tracking-[0.22em] text-[var(--cream)] transition-opacity hover:opacity-85 disabled:cursor-wait disabled:opacity-50"
                    >
                      {isSubmitting
                        ? "Wird gesendet ..."
                        : "Anfrage senden"}

                      {!isSubmitting && (
                        <span className="transition-transform duration-300 group-hover:translate-x-1">
                          ↗
                        </span>
                      )}
                    </button>
                  </div>
                </motion.form>
              ) : (
                /* SUCCESS STATE */
                <motion.div
                  key="success"
                  initial={
                    reduceMotion
                      ? {
                          opacity: 0,
                        }
                      : {
                          opacity: 0,
                          y: 22,
                        }
                  }
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative flex min-h-[650px] items-center overflow-hidden px-7 py-20 md:px-14 lg:px-20"
                >
                  {/* LOGO WATERMARK */}
                  <div className="pointer-events-none absolute -bottom-12 -right-12 text-black/[0.045] md:-bottom-16 md:-right-10">
                    <TabakDepotMark
                      size={320}
                      className="h-[260px] w-[260px] md:h-[380px] md:w-[380px]"
                    />
                  </div>

                  <div className="relative z-10 max-w-3xl">
                    <div className="mb-10 flex items-center gap-5">
                      <span className="flex h-11 w-11 items-center justify-center rounded-full border border-black/15 font-display text-xl italic">
                        ✓
                      </span>

                      <span className="h-px w-16 bg-[var(--line-dark)]" />

                      <span className="eyebrow text-[var(--muted-dark)]">
                        Anfrage erhalten
                      </span>
                    </div>

                    <h2
                      className="font-display font-medium leading-[0.9] tracking-[-0.045em]"
                      style={{
                        fontSize:
                          "clamp(4rem, 7vw, 7rem)",
                      }}
                    >
                      Vielen Dank
                      <br />
                      für Ihre{" "}
                      <span className="italic text-[var(--muted-dark)]">
                        Anfrage.
                      </span>
                    </h2>

                    <p className="mt-8 max-w-lg text-sm leading-7 text-[var(--muted-dark)]">
                      Wir haben Ihre Anfrage erhalten
                      und melden uns persönlich bei
                      Ihnen. In der Regel erhalten Sie
                      innerhalb von 48 Stunden eine
                      Rückmeldung.
                    </p>

                    <button
                      type="button"
                      onClick={onClose}
                      className="group mt-10 inline-flex items-center gap-5 bg-[var(--ink)] px-7 py-4 text-[9px] font-semibold uppercase tracking-[0.22em] text-[var(--cream)]"
                    >
                      Zurück zur Website

                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* -------------------------------- */
/* INPUT FIELD                      */
/* -------------------------------- */

type FieldProps = {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
  value: string;
  placeholder?: string;
  onChange: (value: string) => void;
};

function Field({
  id,
  label,
  type = "text",
  required = false,
  value,
  placeholder,
  onChange,
}: FieldProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block text-[9px] font-medium uppercase tracking-[0.18em] text-[var(--muted-dark)]"
      >
        {label}

        {required && (
          <span className="ml-1">*</span>
        )}
      </label>

      <input
        id={id}
        type={type}
        required={required}
        value={value}
        placeholder={placeholder}
        min={type === "number" ? "1" : undefined}
        onChange={(event) =>
          onChange(event.target.value)
        }
        className="h-[46px] w-full border border-black/10 bg-[var(--cream)] px-4 text-sm outline-none transition-colors placeholder:text-black/25 focus:border-black/40"
      />
    </div>
  );
}

/* -------------------------------- */
/* SELECT FIELD                     */
/* -------------------------------- */

type SelectFieldProps = {
  id: string;
  label: string;
  value: string;
  options: {
    value: string;
    label: string;
  }[];
  onChange: (value: string) => void;
};

function SelectField({
  id,
  label,
  value,
  options,
  onChange,
}: SelectFieldProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block text-[9px] font-medium uppercase tracking-[0.18em] text-[var(--muted-dark)]"
      >
        {label}
      </label>

      <div className="relative">
        <select
          id={id}
          value={value}
          onChange={(event) =>
            onChange(event.target.value)
          }
          className="h-[46px] w-full appearance-none border border-black/10 bg-[var(--cream)] px-4 pr-10 text-sm outline-none transition-colors focus:border-black/40"
        >
          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
            >
              {option.label}
            </option>
          ))}
        </select>

        <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-xs text-[var(--muted-dark)]">
          ↓
        </span>
      </div>
    </div>
  );
}