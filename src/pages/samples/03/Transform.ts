import { useSpring, useTransform } from "framer-motion";

export function Transform(value, springOptions, transformer) {
    return useSpring(useTransform(value, transformer), springOptions);
}