import React, { useEffect, useRef, useState } from "react";
import styled from 'styled-components'

const Size = styled.div`
  /* width: 60%; */
`

const CollapsibleCardEdonec = styled.div`
  /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); */
  transition: 0.3s;
  &:hover {
    /* box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2); */
  }
`

const CollapsibleHeaderEdonec = styled.div`  
  display: flex;
  /* justify-content: space-between; */
  /* padding: 2px 20px 2px 20px; */
  /* border-bottom: 1px solid #dee2e6 !important; */
`

const TitleTextEdonec = styled.div `
  display: block;
  font-size: 1.2rem;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: 400;
  color: ${props => props.theme.colors.secondary};
  cursor: pointer;
`

const CollapsibleIconButtonEdonec = styled.button `  
  background-color: Transparent;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  overflow: hidden;
  outline: none;
  `


const CollapsibleContentEdonec = styled.div` 
  overflow: hidden;
  transition: height 0.2s ease-in-out;
  font-size: 1.2rem;
  font-weight: 300;
  color: ${props => props.theme.colors.secondaryLightGrey};
  /* border-bottom: 1px solid #dee2e6 !important; */
`

const CollapsibleContentPaddingEdonec = styled.div`
  padding: 0px 0 2rem 0px;
    @media ${props => props.theme.mediaQ.laptop} {
      padding: 0px 25% 2rem 0px;
    }

`
const Icon = styled.p`
  color: ${props => props.theme.colors.secondary};
  -moz-transition: all 0.2s linear;
  -webkit-transition: all 0.2s linear;
  transition: all 0.2s linear;

  &.rotate-center-edonec-down {
    -moz-transform: rotate(180deg);
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
  }
  &.rotate-center-edonec-up {
    -moz-transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
`

// .rotate-center-edonec {
//   -moz-transition: all 0.2s linear;
//   -webkit-transition: all 0.2s linear;
//   transition: all 0.2s linear;
// }


interface IProps {
  open?: boolean;
  header: string | React.ReactNode;
  headerClassName?: string;
  titleClassName?: string;
  iconButtonClassName?: string;
  contentClassName?: string;
  contentContainerClassName?: string;
  collapsibleClassName?: string;
}

const Collapsible: React.FC<IProps> = ({open, children, header}) => {

  const [isOpen, setIsOpen] = useState(open);
  const [height, setHeight] = useState<number | undefined>(
    open ? undefined : 0
  );

  const ref = useRef<HTMLDivElement>(null);
  
  const handleFilterOpening = () => {
    setIsOpen((prev) => !prev);
  };


  useEffect(() => {
    if (!height || !isOpen || !ref.current) return undefined;
    // @ts-ignore
    const resizeObserver = new ResizeObserver((el) => {
      setHeight(el[0].contentRect.height);
    });
    resizeObserver.observe(ref.current);
    return () => {
      resizeObserver.disconnect();
    };
  }, [height, isOpen]);


  useEffect(() => {
    if (isOpen) setHeight(ref.current?.getBoundingClientRect().height);
    else setHeight(0);
  }, [isOpen]);

  return (
    <Size>
      <CollapsibleCardEdonec>

        <div>
          <CollapsibleHeaderEdonec>
            <TitleTextEdonec onClick={handleFilterOpening}>
              {isOpen ? "Dölj info" : "Mer info"}
            </TitleTextEdonec>

            <CollapsibleIconButtonEdonec
              type="button"
              onClick={handleFilterOpening}
            >
              <Icon
                className={`fas-edonec fa-chevron-down-edonec ${
                  isOpen
                    ? "rotate-center-edonec-down"
                    : "rotate-center-edonec-up"
                }`}>
                  &#11206;
              </Icon>
            </CollapsibleIconButtonEdonec>

          </CollapsibleHeaderEdonec>
        </div>

        <CollapsibleContentEdonec style={{ height }}>
          <div ref={ref}>
            <CollapsibleContentPaddingEdonec>{children}</CollapsibleContentPaddingEdonec>
          </div>
        </CollapsibleContentEdonec>

      </CollapsibleCardEdonec>

    </Size>
  );
};

export default Collapsible;


// ${props => props.isOpen && 'transform: rotate(180deg); '}

// /* ${props => props.isOpen ? 'transform: rotate(180deg); ' : 'transform: rotate(360deg);'} */

// .rotate-center-edonec-down {
//   -moz-transform: rotate(180deg);
//   -webkit-transform: rotate(180deg);
//   transform: rotate(180deg);
// }
// .rotate-center-edonec-up {
//   -moz-transform: rotate(360deg);
//   -webkit-transform: rotate(360deg);
//   transform: rotate(360deg);
// }

// <Icon isOpen={isOpen}>
// ddd
// </Icon>