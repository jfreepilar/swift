import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { addVisibleSection } from "../store/slice/sectionVisibilitySlice";

export const useSlideUpEffect = () => {
  const sectionsRef = useRef<Array<HTMLElement | null>>([]);
  const dispatch = useDispatch();
  const visibleSections = useSelector((state: RootState) => state.sectionVisibility.visibleSectionIndex);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(({ isIntersecting, target }) => {
          if (!(target instanceof HTMLElement)) return;

          const index = sectionsRef.current.indexOf(target);
          if (isIntersecting && index !== -1) {
            dispatch(addVisibleSection(index));
            observer.unobserve(target);
          }
        });
      },
      { threshold: 0 }
    );

    sectionsRef.current.forEach((section) => section && observer.observe(section));

    return () => sectionsRef.current.forEach((section) => section && observer.unobserve(section));
  }, [dispatch]);

  const slideUpClass = (index: number) =>
    `transition-all duration-1000 ease-out ${
      visibleSections.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-full"
    }`;

  return { sectionsRef, slideUpClass };
};
