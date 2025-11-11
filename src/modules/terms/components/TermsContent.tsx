"use client";

export function TermsContent() {
    return (
        <div className="w-full max-w-4xl">
            <h2 className="font-bricolage text-xl md:text-2xl font-bold text-[#E95D3C] text-center mb-6">
                Terms & Conditions
            </h2>

            {/* Scrollable Terms Content */}
            <div className="relative border border-[#D0CAC5] rounded-2xl min-h-[300px] md:min-h-[400px] max-h-[500px] overflow-hidden">
                <div className="overflow-y-auto h-full max-h-[500px] p-6 md:p-8 space-y-6 text-black font-bricolage">
                    <div>
                        <h3 className="text-lg md:text-xl font-bold mb-3 text-black">
                            1. Introduction
                        </h3>
                        <p className="text-base md:text-lg leading-relaxed">
                            This interview is a market research project
                            conducted by Greybatter, a proprietorship (GSTIN:
                            09APKPA7966A1ZV) under the brand name Vexa, on
                            behalf of our client, BrandEigen LLP (GSTIN:
                            06AAWFB7671G1ZY). The purpose is to gather insights
                            into consumer perceptions and experiences.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg md:text-xl font-bold mb-3 text-black">
                            2. Purpose of Data Collection
                        </h3>
                        <p className="text-base md:text-lg leading-relaxed">
                            The data collected will be used solely for market
                            research and analysis by BrandEigen and Greybatter.
                            Final research findings will be aggregated and
                            anonymised; your individual responses will not be
                            personally identifiable in the final report.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg md:text-xl font-bold mb-3 text-black">
                            3. AI Moderator Disclosure
                        </h3>
                        <p className="text-base md:text-lg leading-relaxed">
                            You acknowledge and agree that this interview will
                            be conducted by an AI (Artificial Intelligence)
                            moderator. The AI is designed to have a natural
                            conversation and guide the interview based on a
                            pre-defined script.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg md:text-xl font-bold mb-3 text-black">
                            4. Data Collected
                        </h3>
                        <p className="text-base md:text-lg leading-relaxed mb-3">
                            By participating, you consent to the collection of
                            the following data:
                        </p>
                        <ul className="text-base md:text-lg leading-relaxed space-y-2 pl-4">
                            <li>
                                • Audio Data: A recording of your spoken words.
                            </li>
                            <li>
                                • Video Data: A recording of your on-camera
                                participation during the interview.
                            </li>
                            <li>
                                • Transcript Data: A text-based transcript of
                                the conversation.
                            </li>
                            <li>
                                • Survey Responses: Any data you provide by
                                responding to the questions.
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg md:text-xl font-bold mb-3 text-black">
                            5. Data Processing and Storage
                        </h3>
                        <p className="text-base md:text-lg leading-relaxed mb-3">
                            Your data will be processed as follows:
                        </p>
                        <div className="text-base md:text-lg leading-relaxed space-y-3 pl-4">
                            <p>
                                <strong>Third-Party Processor:</strong> Your
                                audio data will be processed by ElevenLabs Inc.,
                                a third-party AI technology provider, to
                                facilitate the live conversation.
                            </p>
                            <p>
                                <strong>Data Transfers:</strong> Vexa&apos;s
                                platform is hosted on Amazon Web Services (AWS),
                                and data may be stored in a server location
                                chosen for this project (e.g., UK or India).
                                However, as the third-party processor,
                                ElevenLabs Inc. is based in the United States,
                                your data will be transferred and processed in
                                the US. This is conducted under a legally
                                compliant framework (UK&apos;s International
                                Data Transfer Agreement - IDTA) that provides
                                safeguards equivalent to UK data protection
                                regulations.
                            </p>
                            <p>
                                <strong>No Secondary Use:</strong> Your data
                                will not be used by ElevenLabs Inc. to train its
                                public AI models.
                            </p>
                            <p>
                                <strong>Storage:</strong> All recordings and
                                transcripts will be securely stored by
                                Greybatter on behalf of BrandEigen and will be
                                retained only for the duration required for this
                                research project.
                            </p>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg md:text-xl font-bold mb-3 text-black">
                            6. Your Data Protection Rights
                        </h3>
                        <p className="text-base md:text-lg leading-relaxed">
                            Under UK GDPR, you have the right to request access
                            to, correction of, or erasure of your data. To
                            exercise these rights, please contact Greybatter at{" "}
                            <a
                                href="mailto:arindam@brandeigen.com"
                                className="underline hover:text-[#E95D3C] transition-colors"
                            >
                                arindam@brandeigen.com
                            </a>
                            .
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg md:text-xl font-bold mb-3 text-black">
                            7. Consent
                        </h3>
                        <p className="text-base md:text-lg leading-relaxed">
                            By proceeding, you confirm that you have read,
                            understood, and agree to these Terms and Conditions.
                            You explicitly consent to the collection,
                            processing, and transfer of your data as described.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
