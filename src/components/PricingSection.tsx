import React from 'react';
import { Check, Sparkles, Zap, ArrowRight } from 'lucide-react';
import { PRICING_PLANS } from '../data/portfolioData';

interface PricingSectionProps {
  onSelectPlan: (planName: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPlan }) => {
  return (
    <section className="">
      <div className="">
        
        {/* Header */}
        <div className="">
          {/* <div className="">
            <Zap className="" />
            <span></span>
          </div> */}
          <h2 className="">
             <span className=""></span>
          </h2>
          <p className="">
            
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="">
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={` ${
                plan.highlighted
                  ? ''
                  : ''
              }`}
            >
              {plan.highlighted && (
                <div className="">
                  
                </div>
              )}

              <div className="">
                <div>
                  <h3 className="">{plan.name}</h3>
                  <p className="">{plan.description}</p>
                </div>

                <div className="">
                  <span className="">{plan.price}</span>
                  <span className="">{plan.period}</span>
                </div>

                {/* Features list */}
                {/* <div className="">
                  {plan.features.map((feat, i) => (
                    <div key={i} className="">
                      <Check className="" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div> */}
              </div>

              {/* CTA button */}
              {/* <div className="">
                <button
                  onClick={() => onSelectPlan(plan.name)}
                  className={` ${
                    plan.highlighted
                      ? ''
                      : ''
                  }`}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowRight className="" />
                </button>
              </div> */}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
