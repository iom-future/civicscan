import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  CheckCircle2,
  AlertCircle,
  Loader2,
  ArrowRight,
} from 'lucide-react';
import Container from '../layout/Container';
import SectionHeader from '../layout/SectionHeader';
import Button from '../ui/Button';
import Reveal from '../ui/Reveal';
import { pilotAreas } from '../../data/siteData';

const organizationTypes = [
  'Local government',
  'Urban planning agency',
  'Infrastructure maintenance provider',
  'Community organization',
  'Other',
];

const pilotSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, 'Please enter your full name (at least 2 characters).')
    .max(100, 'Full name must be under 100 characters.'),
  workEmail: z
    .string()
    .trim()
    .email('Please enter a valid work or institutional email address.'),
  organizationName: z
    .string()
    .trim()
    .min(2, 'Please enter your organization or municipality name.')
    .max(140, 'Organization name must be under 140 characters.'),
  organizationType: z.enum(
    [
      'Local government',
      'Urban planning agency',
      'Infrastructure maintenance provider',
      'Community organization',
      'Other',
    ],
    {
      error: 'Please select an organization type.',
    }
  ),
  cityOrLga: z
    .string()
    .trim()
    .min(2, 'Please specify your city, municipality, or local government area.')
    .max(120, 'Location name must be under 120 characters.'),
  infrastructureChallenges: z
    .string()
    .trim()
    .min(
      15,
      'Please briefly describe your infrastructure challenges of interest (at least 15 characters).'
    )
    .max(1200, 'Description must be under 1,200 characters.'),
});

export default function PilotProgramme() {
  const [submitState, setSubmitState] = useState({
    status: 'idle', // 'idle' | 'submitting' | 'success' | 'error'
    errorMessage: '',
  });

  const apiUrl = import.meta.env.VITE_CIVICSCAN_API_URL;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(pilotSchema),
    defaultValues: {
      fullName: '',
      workEmail: '',
      organizationName: '',
      organizationType: undefined,
      cityOrLga: '',
      infrastructureChallenges: '',
    },
  });

  const onSubmit = async (data) => {
    if (submitState.status === 'submitting') return;

    setSubmitState({ status: 'submitting', errorMessage: '' });

    // Brief processing feedback
    await new Promise((resolve) => setTimeout(resolve, 650));

    // Do not falsely claim remote backend submission when VITE_CIVICSCAN_API_URL is not configured
    if (!apiUrl || String(apiUrl).trim() === '') {
      setSubmitState({
        status: 'error',
        errorMessage:
          'Submission endpoint not configured (VITE_CIVICSCAN_API_URL is not set in this environment). Your registration was validated locally but has not been transmitted to a server. Please configure VITE_CIVICSCAN_API_URL to enable live pilot registration storage.',
      });
      return;
    }

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          ...data,
          submittedAt: new Date().toISOString(),
          source: 'civicscan-web-pilot-registration',
        }),
      });

      if (!response.ok) {
        throw new Error(`Server responded with status ${response.status}`);
      }

      setSubmitState({ status: 'success', errorMessage: '' });
      reset();
    } catch (err) {
      setSubmitState({
        status: 'error',
        errorMessage:
          err instanceof Error
            ? `Unable to reach pilot registration endpoint (${err.message}). Please verify your VITE_CIVICSCAN_API_URL configuration or network connection and try again.`
            : 'An unexpected error occurred while submitting your registration. Please try again.',
      });
    }
  };

  const isProcessing = isSubmitting || submitState.status === 'submitting';

  return (
    <section
      id="pilot-programme"
      className="border-b border-slate-200 bg-[#F4F7FA] py-20 sm:py-28"
    >
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-12 items-start">
          {/* Left 5 Cols: Pilot Overview & Candidate Areas */}
          <div className="lg:col-span-5">
            <Reveal>
              <SectionHeader
                eyebrow="HELP BUILD BETTER CITIES"
                title="Let's Make Infrastructure Problems Easier to See and Solve."
                description="CivicScan is seeking pilot partners interested in exploring how AI-assisted infrastructure reporting and monitoring can support more organized municipal maintenance."
              />
            </Reveal>

            <Reveal delay={0.1} className="mt-8">
              <div className="rounded-md border border-slate-200 bg-white p-6">
                <h3 className="font-mono text-xs font-semibold tracking-wider text-[#3978E8] uppercase">
                  Candidate Pilot Focus Areas
                </h3>
                <p className="mt-1.5 text-xs text-[#68788D]">
                  Pilot deployments can be scoped to specific municipal wards,
                  corridors, or infrastructure categories:
                </p>

                <ul className="mt-4 space-y-3">
                  {pilotAreas.map((area) => (
                    <li
                      key={area}
                      className="flex items-start gap-2.5 text-sm text-[#142235]"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#3978E8]" />
                      <span>{area}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

          </div>

          {/* Right 7 Cols: Pilot Registration Form */}
          <div className="lg:col-span-7" id="contact">
            <Reveal delay={0.1}>
              <div className="rounded-md border border-slate-200 bg-white p-6 sm:p-8 lg:p-10 shadow-xs">
                <div className="border-b border-slate-200 pb-5">
                  <span className="font-mono text-xs font-semibold tracking-wider text-[#3978E8] uppercase">
                    Pilot Programme Registration
                  </span>
                  <h3 className="mt-1 font-heading text-2xl font-semibold text-[#142235]">
                    Register Institutional Interest
                  </h3>
                  <p className="mt-1 text-sm text-[#68788D]">
                    Complete the form below to discuss pilot scope, workflow
                    compatibility, and evaluation requirements.
                  </p>
                </div>

                {submitState.status === 'success' ? (
                  <div
                    role="status"
                    aria-live="polite"
                    className="mt-6 rounded-md border border-[#55D3BD] bg-[#55D3BD]/10 p-6 text-[#101C2C]"
                  >
                    <div className="flex items-start gap-3.5">
                      <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-[#101C2C]" />
                      <div>
                        <h4 className="font-heading text-lg font-semibold text-[#101C2C]">
                          Registration Received
                        </h4>
                        <p className="mt-1.5 text-sm leading-relaxed text-[#142235]">
                          Thank you for your interest in CivicScan. Our team
                          will be in touch to discuss potential pilot
                          opportunities.
                        </p>
                        <button
                          type="button"
                          onClick={() =>
                            setSubmitState({ status: 'idle', errorMessage: '' })
                          }
                          className="mt-4 inline-flex items-center gap-1.5 rounded border border-[#101C2C]/20 bg-white px-3.5 py-1.5 text-xs font-medium text-[#101C2C] hover:bg-slate-50 cursor-pointer"
                        >
                          Submit another registration
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    noValidate
                    className="mt-6 space-y-5"
                  >
                    {/* Error Alert Banner if Submission Fails */}
                    {submitState.status === 'error' && (
                      <div
                        role="alert"
                        aria-live="assertive"
                        className="rounded-md border border-amber-300 bg-amber-50/90 p-4 text-xs text-amber-950"
                      >
                        <div className="flex items-start gap-2.5">
                          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-amber-700" />
                          <div>
                            <span className="font-semibold block text-sm">
                              Unable to Complete Submission
                            </span>
                            <p className="mt-1 leading-relaxed">
                              {submitState.errorMessage}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      {/* Full Name */}
                      <div>
                        <label
                          htmlFor="fullName"
                          className="block text-xs font-semibold tracking-wide text-[#142235] uppercase"
                        >
                          Full Name <span className="text-[#3978E8]">*</span>
                        </label>
                        <input
                          id="fullName"
                          type="text"
                          autoComplete="name"
                          placeholder="e.g. Engr. Amina Okafor"
                          aria-invalid={errors.fullName ? 'true' : 'false'}
                          aria-describedby={
                            errors.fullName ? 'fullName-error' : undefined
                          }
                          disabled={isProcessing}
                          {...register('fullName')}
                          className={`mt-1.5 w-full rounded-md border bg-white px-3.5 py-2.5 text-sm text-[#142235] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#3978E8] disabled:bg-slate-100 ${
                            errors.fullName
                              ? 'border-red-500'
                              : 'border-slate-300'
                          }`}
                        />
                        {errors.fullName && (
                          <p
                            id="fullName-error"
                            role="alert"
                            className="mt-1.5 text-xs text-red-600"
                          >
                            {errors.fullName.message}
                          </p>
                        )}
                      </div>

                      {/* Work Email */}
                      <div>
                        <label
                          htmlFor="workEmail"
                          className="block text-xs font-semibold tracking-wide text-[#142235] uppercase"
                        >
                          Work Email <span className="text-[#3978E8]">*</span>
                        </label>
                        <input
                          id="workEmail"
                          type="email"
                          autoComplete="email"
                          placeholder="name@municipality.gov or organization.org"
                          aria-invalid={errors.workEmail ? 'true' : 'false'}
                          aria-describedby={
                            errors.workEmail ? 'workEmail-error' : undefined
                          }
                          disabled={isProcessing}
                          {...register('workEmail')}
                          className={`mt-1.5 w-full rounded-md border bg-white px-3.5 py-2.5 text-sm text-[#142235] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#3978E8] disabled:bg-slate-100 ${
                            errors.workEmail
                              ? 'border-red-500'
                              : 'border-slate-300'
                          }`}
                        />
                        {errors.workEmail && (
                          <p
                            id="workEmail-error"
                            role="alert"
                            className="mt-1.5 text-xs text-red-600"
                          >
                            {errors.workEmail.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      {/* Organization Name */}
                      <div>
                        <label
                          htmlFor="organizationName"
                          className="block text-xs font-semibold tracking-wide text-[#142235] uppercase"
                        >
                          Organization Name{' '}
                          <span className="text-[#3978E8]">*</span>
                        </label>
                        <input
                          id="organizationName"
                          type="text"
                          autoComplete="organization"
                          placeholder="e.g. Metropolitan Public Works Dept."
                          aria-invalid={
                            errors.organizationName ? 'true' : 'false'
                          }
                          aria-describedby={
                            errors.organizationName
                              ? 'organizationName-error'
                              : undefined
                          }
                          disabled={isProcessing}
                          {...register('organizationName')}
                          className={`mt-1.5 w-full rounded-md border bg-white px-3.5 py-2.5 text-sm text-[#142235] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#3978E8] disabled:bg-slate-100 ${
                            errors.organizationName
                              ? 'border-red-500'
                              : 'border-slate-300'
                          }`}
                        />
                        {errors.organizationName && (
                          <p
                            id="organizationName-error"
                            role="alert"
                            className="mt-1.5 text-xs text-red-600"
                          >
                            {errors.organizationName.message}
                          </p>
                        )}
                      </div>

                      {/* Organization Type */}
                      <div>
                        <label
                          htmlFor="organizationType"
                          className="block text-xs font-semibold tracking-wide text-[#142235] uppercase"
                        >
                          Organization Type{' '}
                          <span className="text-[#3978E8]">*</span>
                        </label>
                        <select
                          id="organizationType"
                          defaultValue=""
                          aria-invalid={
                            errors.organizationType ? 'true' : 'false'
                          }
                          aria-describedby={
                            errors.organizationType
                              ? 'organizationType-error'
                              : undefined
                          }
                          disabled={isProcessing}
                          {...register('organizationType')}
                          className={`mt-1.5 w-full rounded-md border bg-white px-3.5 py-2.5 text-sm text-[#142235] focus:outline-none focus:ring-2 focus:ring-[#3978E8] disabled:bg-slate-100 ${
                            errors.organizationType
                              ? 'border-red-500'
                              : 'border-slate-300'
                          }`}
                        >
                          <option value="" disabled>
                            Select organization type...
                          </option>
                          {organizationTypes.map((type) => (
                            <option key={type} value={type}>
                              {type}
                            </option>
                          ))}
                        </select>
                        {errors.organizationType && (
                          <p
                            id="organizationType-error"
                            role="alert"
                            className="mt-1.5 text-xs text-red-600"
                          >
                            {errors.organizationType.message}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* City or Local Government Area */}
                    <div>
                      <label
                        htmlFor="cityOrLga"
                        className="block text-xs font-semibold tracking-wide text-[#142235] uppercase"
                      >
                        City or Local Government Area{' '}
                        <span className="text-[#3978E8]">*</span>
                      </label>
                      <input
                        id="cityOrLga"
                        type="text"
                        placeholder="e.g. Lagos Mainland / Nairobi County / Kigali / Accra Metro"
                        aria-invalid={errors.cityOrLga ? 'true' : 'false'}
                        aria-describedby={
                          errors.cityOrLga ? 'cityOrLga-error' : undefined
                        }
                        disabled={isProcessing}
                        {...register('cityOrLga')}
                        className={`mt-1.5 w-full rounded-md border bg-white px-3.5 py-2.5 text-sm text-[#142235] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#3978E8] disabled:bg-slate-100 ${
                          errors.cityOrLga
                            ? 'border-red-500'
                            : 'border-slate-300'
                        }`}
                      />
                      {errors.cityOrLga && (
                        <p
                          id="cityOrLga-error"
                          role="alert"
                          className="mt-1.5 text-xs text-red-600"
                        >
                          {errors.cityOrLga.message}
                        </p>
                      )}
                    </div>

                    {/* Infrastructure Challenges of Interest */}
                    <div>
                      <label
                        htmlFor="infrastructureChallenges"
                        className="block text-xs font-semibold tracking-wide text-[#142235] uppercase"
                      >
                        Infrastructure Challenges of Interest{' '}
                        <span className="text-[#3978E8]">*</span>
                      </label>
                      <textarea
                        id="infrastructureChallenges"
                        rows={4}
                        placeholder="Describe the primary infrastructure issues, reporting workflows, or maintenance priorities your organization would like to explore..."
                        aria-invalid={
                          errors.infrastructureChallenges ? 'true' : 'false'
                        }
                        aria-describedby={
                          errors.infrastructureChallenges
                            ? 'infrastructureChallenges-error'
                            : undefined
                        }
                        disabled={isProcessing}
                        {...register('infrastructureChallenges')}
                        className={`mt-1.5 w-full rounded-md border bg-white px-3.5 py-2.5 text-sm text-[#142235] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#3978E8] disabled:bg-slate-100 ${
                          errors.infrastructureChallenges
                            ? 'border-red-500'
                            : 'border-slate-300'
                        }`}
                      />
                      {errors.infrastructureChallenges && (
                        <p
                          id="infrastructureChallenges-error"
                          role="alert"
                          className="mt-1.5 text-xs text-red-600"
                        >
                          {errors.infrastructureChallenges.message}
                        </p>
                      )}
                    </div>

                    <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <p className="text-xs text-[#68788D]">
                        Information submitted is used strictly to evaluate pilot
                        programme alignment.
                      </p>

                      <Button
                        type="submit"
                        variant="primary"
                        size="lg"
                        disabled={isProcessing}
                        className="shrink-0"
                        icon={isProcessing ? Loader2 : ArrowRight}
                      >
                        {isProcessing ? 'Processing...' : 'Register Interest'}
                      </Button>
                    </div>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}

