import { TRANSLATIONS, TRANSLATIONS_FORMAT, LOCALE_ID } from "@angular/core";
import { TRANSLATION_EN, TRANSLATION_ES, TRANSLATION_FR } from "../locale/messages";

export function getTranslationProviders(): Promise<Object[]> {

    const locale: string = 'fr';

    const noProviders: Object[] = [];
    if (!locale || locale === 'pt') {
        return Promise.resolve(noProviders);
    }

    if (locale === 'en') {
        return Promise.resolve([
            { provide: TRANSLATIONS, useValue: TRANSLATION_EN },
            { provide: TRANSLATIONS_FORMAT, useValue: 'xlf' },
            { provide: LOCALE_ID, useValue: locale }
        ]);
    } else if (locale === 'es') {
        return Promise.resolve([
            { provide: TRANSLATIONS, useValue: TRANSLATION_ES },
            { provide: TRANSLATIONS_FORMAT, useValue: 'xlf' },
            { provide: LOCALE_ID, useValue: locale }
        ]);
    } else if (locale === 'fr') {
        return Promise.resolve([
            { provide: TRANSLATIONS, useValue: TRANSLATION_FR },
            { provide: TRANSLATIONS_FORMAT, useValue: 'xlf' },
            { provide: LOCALE_ID, useValue: locale }
        ]);
    } else {
        return Promise.resolve(noProviders)
    }
}