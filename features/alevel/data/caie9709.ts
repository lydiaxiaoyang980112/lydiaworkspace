import type { SyllabusCatalog } from "../types";

export const caie9709Catalog = {
  "examBoard": {
    "id": "caie",
    "name": "Cambridge Assessment International Education",
    "shortName": "CAIE"
  },
  "sourceDocument": {
    "id": "caie-9709-2026-2027-v4",
    "title": "Cambridge International AS & A Level Mathematics 9709 syllabus for examination in 2026 and 2027",
    "url": "https://www.cambridgeinternational.org/Images/697427-2026-2027-syllabus.pdf",
    "sha256": "dd0131f3cd8d4e3c270e7936cbb909c15f4cb8053f8337b67c16e8ec0b8bc5e5",
    "version": "Version 4",
    "publishedAt": "2025-12",
    "pageCount": 62
  },
  "syllabusVersion": {
    "id": "caie-9709-2026-2027",
    "examBoardId": "caie",
    "syllabusCode": "9709",
    "title": "Cambridge International AS & A Level Mathematics",
    "examYears": "2026-2027",
    "sourceDocumentId": "caie-9709-2026-2027-v4"
  },
  "qualificationRoutes": [
    {
      "id": "as-pure",
      "name": "AS Level - Pure Mathematics only",
      "level": "AS",
      "componentIds": [
        "p1",
        "p2"
      ],
      "progressionToALevel": false,
      "deliveryModes": [
        "linear"
      ],
      "officialSourcePage": 12
    },
    {
      "id": "as-mechanics",
      "name": "AS Level - Pure Mathematics and Mechanics",
      "level": "AS",
      "componentIds": [
        "p1",
        "p4"
      ],
      "progressionToALevel": true,
      "deliveryModes": [
        "linear"
      ],
      "officialSourcePage": 12
    },
    {
      "id": "as-statistics",
      "name": "AS Level - Pure Mathematics and Statistics",
      "level": "AS",
      "componentIds": [
        "p1",
        "p5"
      ],
      "progressionToALevel": true,
      "deliveryModes": [
        "linear"
      ],
      "officialSourcePage": 12
    },
    {
      "id": "alevel-mechanics",
      "name": "A Level - Mechanics and Statistics route",
      "level": "A Level",
      "componentIds": [
        "p1",
        "p3",
        "p4",
        "p5"
      ],
      "progressionToALevel": true,
      "deliveryModes": [
        "linear",
        "staged"
      ],
      "officialSourcePage": 13
    },
    {
      "id": "alevel-statistics",
      "name": "A Level - Statistics route",
      "level": "A Level",
      "componentIds": [
        "p1",
        "p3",
        "p5",
        "p6"
      ],
      "progressionToALevel": true,
      "deliveryModes": [
        "linear",
        "staged"
      ],
      "officialSourcePage": 13
    }
  ],
  "components": [
    {
      "id": "p1",
      "paper": "Paper 1",
      "title": "Pure Mathematics 1",
      "shortTitle": "P1",
      "color": "#5572e7",
      "assumedComponentIds": []
    },
    {
      "id": "p2",
      "paper": "Paper 2",
      "title": "Pure Mathematics 2",
      "shortTitle": "P2",
      "color": "#7564d8",
      "assumedComponentIds": [
        "p1"
      ]
    },
    {
      "id": "p3",
      "paper": "Paper 3",
      "title": "Pure Mathematics 3",
      "shortTitle": "P3",
      "color": "#8b61c5",
      "assumedComponentIds": [
        "p1"
      ]
    },
    {
      "id": "p4",
      "paper": "Paper 4",
      "title": "Mechanics",
      "shortTitle": "M1",
      "color": "#d17b32",
      "assumedComponentIds": [
        "p1"
      ]
    },
    {
      "id": "p5",
      "paper": "Paper 5",
      "title": "Probability & Statistics 1",
      "shortTitle": "S1",
      "color": "#168a78",
      "assumedComponentIds": [
        "p1"
      ]
    },
    {
      "id": "p6",
      "paper": "Paper 6",
      "title": "Probability & Statistics 2",
      "shortTitle": "S2",
      "color": "#2d8ca8",
      "assumedComponentIds": [
        "p3",
        "p5"
      ]
    }
  ],
  "topics": [
    {
      "id": "caie-9709-2026-2027-topic-1-1",
      "componentId": "p1",
      "reference": "1.1",
      "title": "Quadratics",
      "sourcePage": 19
    },
    {
      "id": "caie-9709-2026-2027-topic-1-2",
      "componentId": "p1",
      "reference": "1.2",
      "title": "Functions",
      "sourcePage": 19
    },
    {
      "id": "caie-9709-2026-2027-topic-1-3",
      "componentId": "p1",
      "reference": "1.3",
      "title": "Coordinate geometry",
      "sourcePage": 20
    },
    {
      "id": "caie-9709-2026-2027-topic-1-4",
      "componentId": "p1",
      "reference": "1.4",
      "title": "Circular measure",
      "sourcePage": 20
    },
    {
      "id": "caie-9709-2026-2027-topic-1-5",
      "componentId": "p1",
      "reference": "1.5",
      "title": "Trigonometry",
      "sourcePage": 21
    },
    {
      "id": "caie-9709-2026-2027-topic-1-6",
      "componentId": "p1",
      "reference": "1.6",
      "title": "Series",
      "sourcePage": 21
    },
    {
      "id": "caie-9709-2026-2027-topic-1-7",
      "componentId": "p1",
      "reference": "1.7",
      "title": "Differentiation",
      "sourcePage": 22
    },
    {
      "id": "caie-9709-2026-2027-topic-1-8",
      "componentId": "p1",
      "reference": "1.8",
      "title": "Integration",
      "sourcePage": 22
    },
    {
      "id": "caie-9709-2026-2027-topic-2-1",
      "componentId": "p2",
      "reference": "2.1",
      "title": "Algebra",
      "sourcePage": 23
    },
    {
      "id": "caie-9709-2026-2027-topic-2-2",
      "componentId": "p2",
      "reference": "2.2",
      "title": "Logarithmic and exponential functions",
      "sourcePage": 23
    },
    {
      "id": "caie-9709-2026-2027-topic-2-3",
      "componentId": "p2",
      "reference": "2.3",
      "title": "Trigonometry",
      "sourcePage": 24
    },
    {
      "id": "caie-9709-2026-2027-topic-2-4",
      "componentId": "p2",
      "reference": "2.4",
      "title": "Differentiation",
      "sourcePage": 24
    },
    {
      "id": "caie-9709-2026-2027-topic-2-5",
      "componentId": "p2",
      "reference": "2.5",
      "title": "Integration",
      "sourcePage": 25
    },
    {
      "id": "caie-9709-2026-2027-topic-2-6",
      "componentId": "p2",
      "reference": "2.6",
      "title": "Numerical solution of equations",
      "sourcePage": 25
    },
    {
      "id": "caie-9709-2026-2027-topic-3-1",
      "componentId": "p3",
      "reference": "3.1",
      "title": "Algebra",
      "sourcePage": 26
    },
    {
      "id": "caie-9709-2026-2027-topic-3-2",
      "componentId": "p3",
      "reference": "3.2",
      "title": "Logarithmic and exponential functions",
      "sourcePage": 27
    },
    {
      "id": "caie-9709-2026-2027-topic-3-3",
      "componentId": "p3",
      "reference": "3.3",
      "title": "Trigonometry",
      "sourcePage": 27
    },
    {
      "id": "caie-9709-2026-2027-topic-3-4",
      "componentId": "p3",
      "reference": "3.4",
      "title": "Differentiation",
      "sourcePage": 28
    },
    {
      "id": "caie-9709-2026-2027-topic-3-5",
      "componentId": "p3",
      "reference": "3.5",
      "title": "Integration",
      "sourcePage": 28
    },
    {
      "id": "caie-9709-2026-2027-topic-3-6",
      "componentId": "p3",
      "reference": "3.6",
      "title": "Numerical solution of equations",
      "sourcePage": 29
    },
    {
      "id": "caie-9709-2026-2027-topic-3-7",
      "componentId": "p3",
      "reference": "3.7",
      "title": "Vectors",
      "sourcePage": 29
    },
    {
      "id": "caie-9709-2026-2027-topic-3-8",
      "componentId": "p3",
      "reference": "3.8",
      "title": "Differential equations",
      "sourcePage": 30
    },
    {
      "id": "caie-9709-2026-2027-topic-3-9",
      "componentId": "p3",
      "reference": "3.9",
      "title": "Complex numbers",
      "sourcePage": 30
    },
    {
      "id": "caie-9709-2026-2027-topic-4-1",
      "componentId": "p4",
      "reference": "4.1",
      "title": "Forces and equilibrium",
      "sourcePage": 31
    },
    {
      "id": "caie-9709-2026-2027-topic-4-2",
      "componentId": "p4",
      "reference": "4.2",
      "title": "Kinematics of motion in a straight line",
      "sourcePage": 32
    },
    {
      "id": "caie-9709-2026-2027-topic-4-3",
      "componentId": "p4",
      "reference": "4.3",
      "title": "Momentum",
      "sourcePage": 32
    },
    {
      "id": "caie-9709-2026-2027-topic-4-4",
      "componentId": "p4",
      "reference": "4.4",
      "title": "Newton's laws of motion",
      "sourcePage": 33
    },
    {
      "id": "caie-9709-2026-2027-topic-4-5",
      "componentId": "p4",
      "reference": "4.5",
      "title": "Energy, work and power",
      "sourcePage": 33
    },
    {
      "id": "caie-9709-2026-2027-topic-5-1",
      "componentId": "p5",
      "reference": "5.1",
      "title": "Representation of data",
      "sourcePage": 34
    },
    {
      "id": "caie-9709-2026-2027-topic-5-2",
      "componentId": "p5",
      "reference": "5.2",
      "title": "Permutations and combinations",
      "sourcePage": 34
    },
    {
      "id": "caie-9709-2026-2027-topic-5-3",
      "componentId": "p5",
      "reference": "5.3",
      "title": "Probability",
      "sourcePage": 35
    },
    {
      "id": "caie-9709-2026-2027-topic-5-4",
      "componentId": "p5",
      "reference": "5.4",
      "title": "Discrete random variables",
      "sourcePage": 35
    },
    {
      "id": "caie-9709-2026-2027-topic-5-5",
      "componentId": "p5",
      "reference": "5.5",
      "title": "The normal distribution",
      "sourcePage": 36
    },
    {
      "id": "caie-9709-2026-2027-topic-6-1",
      "componentId": "p6",
      "reference": "6.1",
      "title": "The Poisson distribution",
      "sourcePage": 37
    },
    {
      "id": "caie-9709-2026-2027-topic-6-2",
      "componentId": "p6",
      "reference": "6.2",
      "title": "Linear combinations of random variables",
      "sourcePage": 37
    },
    {
      "id": "caie-9709-2026-2027-topic-6-3",
      "componentId": "p6",
      "reference": "6.3",
      "title": "Continuous random variables",
      "sourcePage": 38
    },
    {
      "id": "caie-9709-2026-2027-topic-6-4",
      "componentId": "p6",
      "reference": "6.4",
      "title": "Sampling and estimation",
      "sourcePage": 38
    },
    {
      "id": "caie-9709-2026-2027-topic-6-5",
      "componentId": "p6",
      "reference": "6.5",
      "title": "Hypothesis tests",
      "sourcePage": 39
    }
  ],
  "learningOutcomes": [
    {
      "id": "caie-9709-2026-2027-1.1-lo-01",
      "topicId": "caie-9709-2026-2027-topic-1-1",
      "ordinal": 1,
      "officialText": "carry out the process of completing the square for a quadratic polynomial ax² + bx + c and use a completed square form",
      "sourceDocumentId": "caie-9709-2026-2027-v4",
      "sourcePage": 19,
      "sourceType": "official",
      "verificationStatus": "verified"
    },
    {
      "id": "caie-9709-2026-2027-1.1-lo-02",
      "topicId": "caie-9709-2026-2027-topic-1-1",
      "ordinal": 2,
      "officialText": "find the discriminant of a quadratic polynomial ax² + bx + c and use the discriminant",
      "sourceDocumentId": "caie-9709-2026-2027-v4",
      "sourcePage": 19,
      "sourceType": "official",
      "verificationStatus": "verified"
    },
    {
      "id": "caie-9709-2026-2027-1.1-lo-03",
      "topicId": "caie-9709-2026-2027-topic-1-1",
      "ordinal": 3,
      "officialText": "solve quadratic equations, and quadratic inequalities, in one unknown",
      "sourceDocumentId": "caie-9709-2026-2027-v4",
      "sourcePage": 19,
      "sourceType": "official",
      "verificationStatus": "verified"
    },
    {
      "id": "caie-9709-2026-2027-1.1-lo-04",
      "topicId": "caie-9709-2026-2027-topic-1-1",
      "ordinal": 4,
      "officialText": "solve by substitution a pair of simultaneous equations of which one is linear and one is quadratic",
      "sourceDocumentId": "caie-9709-2026-2027-v4",
      "sourcePage": 19,
      "sourceType": "official",
      "verificationStatus": "verified"
    },
    {
      "id": "caie-9709-2026-2027-1.1-lo-05",
      "topicId": "caie-9709-2026-2027-topic-1-1",
      "ordinal": 5,
      "officialText": "recognise and solve equations in x which are quadratic in some function of x.",
      "sourceDocumentId": "caie-9709-2026-2027-v4",
      "sourcePage": 19,
      "sourceType": "official",
      "verificationStatus": "verified"
    },
    {
      "id": "caie-9709-2026-2027-1.2-lo-01",
      "topicId": "caie-9709-2026-2027-topic-1-2",
      "ordinal": 1,
      "officialText": "understand the terms function, domain, range, one-one function, inverse function and composition of functions",
      "sourceDocumentId": "caie-9709-2026-2027-v4",
      "sourcePage": 19,
      "sourceType": "official",
      "verificationStatus": "verified"
    },
    {
      "id": "caie-9709-2026-2027-1.2-lo-02",
      "topicId": "caie-9709-2026-2027-topic-1-2",
      "ordinal": 2,
      "officialText": "identify the range of a given function in simple cases, and find the composition of two given functions",
      "sourceDocumentId": "caie-9709-2026-2027-v4",
      "sourcePage": 19,
      "sourceType": "official",
      "verificationStatus": "verified"
    },
    {
      "id": "caie-9709-2026-2027-1.2-lo-03",
      "topicId": "caie-9709-2026-2027-topic-1-2",
      "ordinal": 3,
      "officialText": "determine whether or not a given function is one-one, and find the inverse of a one-one function in simple cases",
      "sourceDocumentId": "caie-9709-2026-2027-v4",
      "sourcePage": 19,
      "sourceType": "official",
      "verificationStatus": "verified"
    },
    {
      "id": "caie-9709-2026-2027-1.2-lo-04",
      "topicId": "caie-9709-2026-2027-topic-1-2",
      "ordinal": 4,
      "officialText": "illustrate in graphical terms the relation between a one-one function and its inverse",
      "sourceDocumentId": "caie-9709-2026-2027-v4",
      "sourcePage": 19,
      "sourceType": "official",
      "verificationStatus": "verified"
    },
    {
      "id": "caie-9709-2026-2027-1.2-lo-05",
      "topicId": "caie-9709-2026-2027-topic-1-2",
      "ordinal": 5,
      "officialText": "understand and use the transformations of the graph of y = f(x) given by y = f(x) + a, y = f(x + a), y = af(x), y = f(ax) and simple combinations of these.",
      "sourceDocumentId": "caie-9709-2026-2027-v4",
      "sourcePage": 19,
      "sourceType": "official",
      "verificationStatus": "verified"
    },
    {
      "id": "caie-9709-2026-2027-1.3-lo-01",
      "topicId": "caie-9709-2026-2027-topic-1-3",
      "ordinal": 1,
      "officialText": "find the equation of a straight line given sufficient information",
      "sourceDocumentId": "caie-9709-2026-2027-v4",
      "sourcePage": 20,
      "sourceType": "official",
      "verificationStatus": "verified"
    },
    {
      "id": "caie-9709-2026-2027-1.3-lo-02",
      "topicId": "caie-9709-2026-2027-topic-1-3",
      "ordinal": 2,
      "officialText": "interpret and use any of the forms y = mx + c, y - y₁ = m(x - x₁), ax + by + c = 0 in solving problems",
      "sourceDocumentId": "caie-9709-2026-2027-v4",
      "sourcePage": 20,
      "sourceType": "official",
      "verificationStatus": "verified"
    },
    {
      "id": "caie-9709-2026-2027-1.3-lo-03",
      "topicId": "caie-9709-2026-2027-topic-1-3",
      "ordinal": 3,
      "officialText": "understand that the equation (x - a)² + (y - b)² = r² represents the circle with centre (a, b) and radius r",
      "sourceDocumentId": "caie-9709-2026-2027-v4",
      "sourcePage": 20,
      "sourceType": "official",
      "verificationStatus": "verified"
    },
    {
      "id": "caie-9709-2026-2027-1.3-lo-04",
      "topicId": "caie-9709-2026-2027-topic-1-3",
      "ordinal": 4,
      "officialText": "use algebraic methods to solve problems involving lines and circles",
      "sourceDocumentId": "caie-9709-2026-2027-v4",
      "sourcePage": 20,
      "sourceType": "official",
      "verificationStatus": "verified"
    },
    {
      "id": "caie-9709-2026-2027-1.3-lo-05",
      "topicId": "caie-9709-2026-2027-topic-1-3",
      "ordinal": 5,
      "officialText": "understand the relationship between a graph and its associated algebraic equation, and use the relationship between points of intersection of graphs and solutions of equations.",
      "sourceDocumentId": "caie-9709-2026-2027-v4",
      "sourcePage": 20,
      "sourceType": "official",
      "verificationStatus": "verified"
    },
    {
      "id": "caie-9709-2026-2027-1.4-lo-01",
      "topicId": "caie-9709-2026-2027-topic-1-4",
      "ordinal": 1,
      "officialText": "understand the definition of a radian, and use the relationship between radians and degrees",
      "sourceDocumentId": "caie-9709-2026-2027-v4",
      "sourcePage": 20,
      "sourceType": "official",
      "verificationStatus": "verified"
    },
    {
      "id": "caie-9709-2026-2027-1.4-lo-02",
      "topicId": "caie-9709-2026-2027-topic-1-4",
      "ordinal": 2,
      "officialText": "use the formulae s = rθ and A = ½r²θ in solving problems concerning the arc length and sector area of a circle.",
      "sourceDocumentId": "caie-9709-2026-2027-v4",
      "sourcePage": 20,
      "sourceType": "official",
      "verificationStatus": "verified"
    },
    {
      "id": "caie-9709-2026-2027-1.5-lo-01",
      "topicId": "caie-9709-2026-2027-topic-1-5",
      "ordinal": 1,
      "officialText": "sketch and use graphs of the sine, cosine and tangent functions (for angles of any size, and using either degrees or radians)",
      "sourceDocumentId": "caie-9709-2026-2027-v4",
      "sourcePage": 21,
      "sourceType": "official",
      "verificationStatus": "verified"
    },
    {
      "id": "caie-9709-2026-2027-1.5-lo-02",
      "topicId": "caie-9709-2026-2027-topic-1-5",
      "ordinal": 2,
      "officialText": "use the exact values of the sine, cosine and tangent of 30°, 45°, 60°, and related angles",
      "sourceDocumentId": "caie-9709-2026-2027-v4",
      "sourcePage": 21,
      "sourceType": "official",
      "verificationStatus": "verified"
    },
    {
      "id": "caie-9709-2026-2027-1.5-lo-03",
      "topicId": "caie-9709-2026-2027-topic-1-5",
      "ordinal": 3,
      "officialText": "use the notations sin⁻¹x, cos⁻¹x, tan⁻¹x to denote the principal values of the inverse trigonometric relations",
      "sourceDocumentId": "caie-9709-2026-2027-v4",
      "sourcePage": 21,
      "sourceType": "official",
      "verificationStatus": "verified"
    },
    {
      "id": "caie-9709-2026-2027-1.5-lo-04",
      "topicId": "caie-9709-2026-2027-topic-1-5",
      "ordinal": 4,
      "officialText": "use the identities sin θ / cos θ ≡ tan θ and sin² θ + cos² θ ≡ 1",
      "sourceDocumentId": "caie-9709-2026-2027-v4",
      "sourcePage": 21,
      "sourceType": "official",
      "verificationStatus": "verified"
    },
    {
      "id": "caie-9709-2026-2027-1.5-lo-05",
      "topicId": "caie-9709-2026-2027-topic-1-5",
      "ordinal": 5,
      "officialText": "find all the solutions of simple trigonometrical equations lying in a specified interval (general forms of solution are not included).",
      "sourceDocumentId": "caie-9709-2026-2027-v4",
      "sourcePage": 21,
      "sourceType": "official",
      "verificationStatus": "verified"
    },
    {
      "id": "caie-9709-2026-2027-1.6-lo-01",
      "topicId": "caie-9709-2026-2027-topic-1-6",
      "ordinal": 1,
      "officialText": "use the expansion of (a + b)ⁿ, where n is a positive integer",
      "sourceDocumentId": "caie-9709-2026-2027-v4",
      "sourcePage": 21,
      "sourceType": "official",
      "verificationStatus": "verified"
    },
    {
      "id": "caie-9709-2026-2027-1.6-lo-02",
      "topicId": "caie-9709-2026-2027-topic-1-6",
      "ordinal": 2,
      "officialText": "recognise arithmetic and geometric progressions",
      "sourceDocumentId": "caie-9709-2026-2027-v4",
      "sourcePage": 21,
      "sourceType": "official",
      "verificationStatus": "verified"
    },
    {
      "id": "caie-9709-2026-2027-1.6-lo-03",
      "topicId": "caie-9709-2026-2027-topic-1-6",
      "ordinal": 3,
      "officialText": "use the formulae for the nth term and for the sum of the first n terms to solve problems involving arithmetic or geometric progressions",
      "sourceDocumentId": "caie-9709-2026-2027-v4",
      "sourcePage": 21,
      "sourceType": "official",
      "verificationStatus": "verified"
    },
    {
      "id": "caie-9709-2026-2027-1.6-lo-04",
      "topicId": "caie-9709-2026-2027-topic-1-6",
      "ordinal": 4,
      "officialText": "use the condition for the convergence of a geometric progression, and the formula for the sum to infinity of a convergent geometric progression.",
      "sourceDocumentId": "caie-9709-2026-2027-v4",
      "sourcePage": 21,
      "sourceType": "official",
      "verificationStatus": "verified"
    },
    {
      "id": "caie-9709-2026-2027-1.7-lo-01",
      "topicId": "caie-9709-2026-2027-topic-1-7",
      "ordinal": 1,
      "officialText": "understand the gradient of a curve at a point as the limit of the gradients of a suitable sequence of chords, and use the notations f′(x), f″(x), dy/dx and d²y/dx² for first and second derivatives",
      "sourceDocumentId": "caie-9709-2026-2027-v4",
      "sourcePage": 22,
      "sourceType": "official",
      "verificationStatus": "verified"
    },
    {
      "id": "caie-9709-2026-2027-1.7-lo-02",
      "topicId": "caie-9709-2026-2027-topic-1-7",
      "ordinal": 2,
      "officialText": "use the derivative of xⁿ (for any rational n), together with constant multiples, sums and differences of functions, and of composite functions using the chain rule",
      "sourceDocumentId": "caie-9709-2026-2027-v4",
      "sourcePage": 22,
      "sourceType": "official",
      "verificationStatus": "verified"
    },
    {
      "id": "caie-9709-2026-2027-1.7-lo-03",
      "topicId": "caie-9709-2026-2027-topic-1-7",
      "ordinal": 3,
      "officialText": "apply differentiation to gradients, tangents and normals, increasing and decreasing functions and rates of change",
      "sourceDocumentId": "caie-9709-2026-2027-v4",
      "sourcePage": 22,
      "sourceType": "official",
      "verificationStatus": "verified"
    },
    {
      "id": "caie-9709-2026-2027-1.7-lo-04",
      "topicId": "caie-9709-2026-2027-topic-1-7",
      "ordinal": 4,
      "officialText": "locate stationary points and determine their nature, and use information about stationary points in sketching graphs.",
      "sourceDocumentId": "caie-9709-2026-2027-v4",
      "sourcePage": 22,
      "sourceType": "official",
      "verificationStatus": "verified"
    },
    {
      "id": "caie-9709-2026-2027-1.8-lo-01",
      "topicId": "caie-9709-2026-2027-topic-1-8",
      "ordinal": 1,
      "officialText": "understand integration as the reverse process of differentiation, and integrate (ax + b)ⁿ (for any rational n except −1), together with constant multiples, sums and differences",
      "sourceDocumentId": "caie-9709-2026-2027-v4",
      "sourcePage": 22,
      "sourceType": "official",
      "verificationStatus": "verified"
    },
    {
      "id": "caie-9709-2026-2027-1.8-lo-02",
      "topicId": "caie-9709-2026-2027-topic-1-8",
      "ordinal": 2,
      "officialText": "solve problems involving the evaluation of a constant of integration",
      "sourceDocumentId": "caie-9709-2026-2027-v4",
      "sourcePage": 22,
      "sourceType": "official",
      "verificationStatus": "verified"
    },
    {
      "id": "caie-9709-2026-2027-1.8-lo-03",
      "topicId": "caie-9709-2026-2027-topic-1-8",
      "ordinal": 3,
      "officialText": "evaluate definite integrals",
      "sourceDocumentId": "caie-9709-2026-2027-v4",
      "sourcePage": 22,
      "sourceType": "official",
      "verificationStatus": "verified"
    },
    {
      "id": "caie-9709-2026-2027-1.8-lo-04",
      "topicId": "caie-9709-2026-2027-topic-1-8",
      "ordinal": 4,
      "officialText": "use definite integration to find - the area of a region bounded by a curve and lines parallel to the axes, or between a curve and a line or between two curves - a volume of revolution about one of the axes.",
      "sourceDocumentId": "caie-9709-2026-2027-v4",
      "sourcePage": 22,
      "sourceType": "official",
      "verificationStatus": "verified"
    },
    {
      "id": "caie-9709-2026-2027-2.1-lo-01",
      "topicId": "caie-9709-2026-2027-topic-2-1",
      "ordinal": 1,
      "officialText": "understand the meaning of |x|, sketch the graph of y = |ax + b| and use relations such as |a| = |b| ⇔ a² = b² and |x - a| < b ⇔ a - b < x < a + b when solving equations and inequalities",
      "sourceDocumentId": "caie-9709-2026-2027-v4",
      "sourcePage": 23,
      "sourceType": "official",
      "verificationStatus": "verified"
    },
    {
      "id": "caie-9709-2026-2027-2.1-lo-02",
      "topicId": "caie-9709-2026-2027-topic-2-1",
      "ordinal": 2,
      "officialText": "divide a polynomial, of degree not exceeding 4, by a linear or quadratic polynomial, and identify the quotient and remainder (which may be zero)",
      "sourceDocumentId": "caie-9709-2026-2027-v4",
      "sourcePage": 23,
      "sourceType": "official",
      "verificationStatus": "verified"
    },
    {
      "id": "caie-9709-2026-2027-2.1-lo-03",
      "topicId": "caie-9709-2026-2027-topic-2-1",
      "ordinal": 3,
      "officialText": "use the factor theorem and the remainder theorem.",
      "sourceDocumentId": "caie-9709-2026-2027-v4",
      "sourcePage": 23,
      "sourceType": "official",
      "verificationStatus": "verified"
    },
    {
      "id": "caie-9709-2026-2027-2.2-lo-01",
      "topicId": "caie-9709-2026-2027-topic-2-2",
      "ordinal": 1,
      "officialText": "understand the relationship between logarithms and indices, and use the laws of logarithms (excluding change of base)",
      "sourceDocumentId": "caie-9709-2026-2027-v4",
      "sourcePage": 23,
      "sourceType": "official",
      "verificationStatus": "verified"
    },
    {
      "id": "caie-9709-2026-2027-2.2-lo-02",
      "topicId": "caie-9709-2026-2027-topic-2-2",
      "ordinal": 2,
      "officialText": "understand the definition and properties of eˣ and ln x, including their relationship as inverse functions and their graphs",
      "sourceDocumentId": "caie-9709-2026-2027-v4",
      "sourcePage": 23,
      "sourceType": "official",
      "verificationStatus": "verified"
    },
    {
      "id": "caie-9709-2026-2027-2.2-lo-03",
      "topicId": "caie-9709-2026-2027-topic-2-2",
      "ordinal": 3,
      "officialText": "use logarithms to solve equations and inequalities in which the unknown appears in indices",
      "sourceDocumentId": "caie-9709-2026-2027-v4",
      "sourcePage": 23,
      "sourceType": "official",
      "verificationStatus": "verified"
    },
    {
      "id": "caie-9709-2026-2027-2.2-lo-04",
      "topicId": "caie-9709-2026-2027-topic-2-2",
      "ordinal": 4,
      "officialText": "use logarithms to transform a given relationship to linear form, and hence determine unknown constants by considering the gradient and/or intercept.",
      "sourceDocumentId": "caie-9709-2026-2027-v4",
      "sourcePage": 23,
      "sourceType": "official",
      "verificationStatus": "verified"
    },
    {
      "id": "caie-9709-2026-2027-2.3-lo-01",
      "topicId": "caie-9709-2026-2027-topic-2-3",
      "ordinal": 1,
      "officialText": "understand the relationship of the secant, cosecant and cotangent functions to cosine, sine and tangent, and use properties and graphs of all six trigonometric functions for angles of any magnitude",
      "sourceDocumentId": "caie-9709-2026-2027-v4",
      "sourcePage": 24,
      "sourceType": "official",
      "verificationStatus": "verified"
    },
    {
      "id": "caie-9709-2026-2027-2.3-lo-02",
      "topicId": "caie-9709-2026-2027-topic-2-3",
      "ordinal": 2,
      "officialText": "use trigonometrical identities for the simplification and exact evaluation of expressions, and in the course of solving equations, and select an identity or identities appropriate to the context, showing familiarity in particular with the use of sec² θ ≡ 1 + tan² θ and cosec² θ ≡ 1 + cot² θ; the expansions of sin(A ± B), cos(A ± B) and tan(A ± B); the formulae for sin 2A, cos 2A and tan 2A; and the expression of a sin θ + b cos θ in the forms R sin(θ ± α) and R cos(θ ± α)",
      "sourceDocumentId": "caie-9709-2026-2027-v4",
      "sourcePage": 24,
      "sourceType": "official",
      "verificationStatus": "verified"
    },
    {
      "id": "caie-9709-2026-2027-2.4-lo-01",
      "topicId": "caie-9709-2026-2027-topic-2-4",
      "ordinal": 1,
      "officialText": "use the derivatives of eˣ, ln x, sin x, cos x, tan x, together with constant multiples, sums, differences and composites",
      "sourceDocumentId": "caie-9709-2026-2027-v4",
      "sourcePage": 24,
      "sourceType": "official",
      "verificationStatus": "verified"
    },
    {
      "id": "caie-9709-2026-2027-2.4-lo-02",
      "topicId": "caie-9709-2026-2027-topic-2-4",
      "ordinal": 2,
      "officialText": "differentiate products and quotients",
      "sourceDocumentId": "caie-9709-2026-2027-v4",
      "sourcePage": 24,
      "sourceType": "official",
      "verificationStatus": "verified"
    },
    {
      "id": "caie-9709-2026-2027-2.4-lo-03",
      "topicId": "caie-9709-2026-2027-topic-2-4",
      "ordinal": 3,
      "officialText": "find and use the first derivative of a function which is defined parametrically or implicitly.",
      "sourceDocumentId": "caie-9709-2026-2027-v4",
      "sourcePage": 24,
      "sourceType": "official",
      "verificationStatus": "verified"
    },
    {
      "id": "caie-9709-2026-2027-2.5-lo-01",
      "topicId": "caie-9709-2026-2027-topic-2-5",
      "ordinal": 1,
      "officialText": "extend the idea of ‘reverse differentiation’ to include the integration of e^(ax + b), 1/(ax + b), sin(ax + b), cos(ax + b) and sec²(ax + b)",
      "sourceDocumentId": "caie-9709-2026-2027-v4",
      "sourcePage": 25,
      "sourceType": "official",
      "verificationStatus": "verified"
    },
    {
      "id": "caie-9709-2026-2027-2.5-lo-02",
      "topicId": "caie-9709-2026-2027-topic-2-5",
      "ordinal": 2,
      "officialText": "use trigonometrical relationships in carrying out integration",
      "sourceDocumentId": "caie-9709-2026-2027-v4",
      "sourcePage": 25,
      "sourceType": "official",
      "verificationStatus": "verified"
    },
    {
      "id": "caie-9709-2026-2027-2.5-lo-03",
      "topicId": "caie-9709-2026-2027-topic-2-5",
      "ordinal": 3,
      "officialText": "understand and use the trapezium rule to estimate the value of a definite integral.",
      "sourceDocumentId": "caie-9709-2026-2027-v4",
      "sourcePage": 25,
      "sourceType": "official",
      "verificationStatus": "verified"
    },
    {
      "id": "caie-9709-2026-2027-2.6-lo-01",
      "topicId": "caie-9709-2026-2027-topic-2-6",
      "ordinal": 1,
      "officialText": "locate approximately a root of an equation, by means of graphical considerations and/or searching for a sign change",
      "sourceDocumentId": "caie-9709-2026-2027-v4",
      "sourcePage": 25,
      "sourceType": "official",
      "verificationStatus": "verified"
    },
    {
      "id": "caie-9709-2026-2027-2.6-lo-02",
      "topicId": "caie-9709-2026-2027-topic-2-6",
      "ordinal": 2,
      "officialText": "understand the idea of, and use the notation for, a sequence of approximations which converges to a root of an equation",
      "sourceDocumentId": "caie-9709-2026-2027-v4",
      "sourcePage": 25,
      "sourceType": "official",
      "verificationStatus": "verified"
    },
    {
      "id": "caie-9709-2026-2027-2.6-lo-03",
      "topicId": "caie-9709-2026-2027-topic-2-6",
      "ordinal": 3,
      "officialText": "understand how a given simple iterative formula of the form xₙ₊₁ = F(xₙ) relates to the equation being solved, and use a given iteration, or an iteration based on a given rearrangement of an equation, to determine a root to a prescribed degree of accuracy.",
      "sourceDocumentId": "caie-9709-2026-2027-v4",
      "sourcePage": 25,
      "sourceType": "official",
      "verificationStatus": "verified"
    },
    {
      "id": "caie-9709-2026-2027-3.1-lo-01",
      "topicId": "caie-9709-2026-2027-topic-3-1",
      "ordinal": 1,
      "officialText": "understand the meaning of |x|, sketch the graph of y = |ax + b| and use relations such as |a| = |b| ⇔ a² = b² and |x - a| < b ⇔ a - b < x < a + b when solving equations and inequalities",
      "sourceDocumentId": "caie-9709-2026-2027-v4",
      "sourcePage": 26,
      "sourceType": "official",
      "verificationStatus": "verified"
    },
    {
      "id": "caie-9709-2026-2027-3.1-lo-02",
      "topicId": "caie-9709-2026-2027-topic-3-1",
      "ordinal": 2,
      "officialText": "divide a polynomial, of degree not exceeding 4, by a linear or quadratic polynomial, and identify the quotient and remainder (which may be zero)",
      "sourceDocumentId": "caie-9709-2026-2027-v4",
      "sourcePage": 26,
      "sourceType": "official",
      "verificationStatus": "verified"
    },
    {
      "id": "caie-9709-2026-2027-3.1-lo-03",
      "topicId": "caie-9709-2026-2027-topic-3-1",
      "ordinal": 3,
      "officialText": "use the factor theorem and the remainder theorem",
      "sourceDocumentId": "caie-9709-2026-2027-v4",
      "sourcePage": 26,
      "sourceType": "official",
      "verificationStatus": "verified"
    },
    {
      "id": "caie-9709-2026-2027-3.1-lo-04",
      "topicId": "caie-9709-2026-2027-topic-3-1",
      "ordinal": 4,
      "officialText": "recall an appropriate form for expressing rational functions in partial fractions, and carry out the decomposition, in cases where the denominator is no more complicated than (ax + b)(cx + d)(ex + f), (ax + b)(cx + d)² or (ax + b)(cx² + d)",
      "sourceDocumentId": "caie-9709-2026-2027-v4",
      "sourcePage": 26,
      "sourceType": "official",
      "verificationStatus": "verified"
    },
    {
      "id": "caie-9709-2026-2027-3.1-lo-05",
      "topicId": "caie-9709-2026-2027-topic-3-1",
      "ordinal": 5,
      "officialText": "use the expansion of (1 + x)ⁿ, where n is a rational number and |x| < 1.",
      "sourceDocumentId": "caie-9709-2026-2027-v4",
      "sourcePage": 26,
      "sourceType": "official",
      "verificationStatus": "verified"
    },
    {
      "id": "caie-9709-2026-2027-3.2-lo-01",
      "topicId": "caie-9709-2026-2027-topic-3-2",
      "ordinal": 1,
      "officialText": "understand the relationship between logarithms and indices, and use the laws of logarithms (excluding change of base)",
      "sourceDocumentId": "caie-9709-2026-2027-v4",
      "sourcePage": 27,
      "sourceType": "official",
      "verificationStatus": "verified"
    },
    {
      "id": "caie-9709-2026-2027-3.2-lo-02",
      "topicId": "caie-9709-2026-2027-topic-3-2",
      "ordinal": 2,
      "officialText": "understand the definition and properties of eˣ and ln x, including their relationship as inverse functions and their graphs",
      "sourceDocumentId": "caie-9709-2026-2027-v4",
      "sourcePage": 27,
      "sourceType": "official",
      "verificationStatus": "verified"
    },
    {
      "id": "caie-9709-2026-2027-3.2-lo-03",
      "topicId": "caie-9709-2026-2027-topic-3-2",
      "ordinal": 3,
      "officialText": "use logarithms to solve equations and inequalities in which the unknown appears in indices",
      "sourceDocumentId": "caie-9709-2026-2027-v4",
      "sourcePage": 27,
      "sourceType": "official",
      "verificationStatus": "verified"
    },
    {
      "id": "caie-9709-2026-2027-3.2-lo-04",
      "topicId": "caie-9709-2026-2027-topic-3-2",
      "ordinal": 4,
      "officialText": "use logarithms to transform a given relationship to linear form, and hence determine unknown constants by considering the gradient and/or intercept.",
      "sourceDocumentId": "caie-9709-2026-2027-v4",
      "sourcePage": 27,
      "sourceType": "official",
      "verificationStatus": "verified"
    },
    {
      "id": "caie-9709-2026-2027-3.3-lo-01",
      "topicId": "caie-9709-2026-2027-topic-3-3",
      "ordinal": 1,
      "officialText": "understand the relationship of the secant, cosecant and cotangent functions to cosine, sine and tangent, and use properties and graphs of all six trigonometric functions for angles of any magnitude",
      "sourceDocumentId": "caie-9709-2026-2027-v4",
      "sourcePage": 27,
      "sourceType": "official",
      "verificationStatus": "verified"
    },
    {
      "id": "caie-9709-2026-2027-3.3-lo-02",
      "topicId": "caie-9709-2026-2027-topic-3-3",
      "ordinal": 2,
      "officialText": "use trigonometrical identities for the simplification and exact evaluation of expressions, and in the course of solving equations, and select an identity or identities appropriate to the context, showing familiarity in particular with the use of sec² θ ≡ 1 + tan² θ and cosec² θ ≡ 1 + cot² θ; the expansions of sin(A ± B), cos(A ± B) and tan(A ± B); the formulae for sin 2A, cos 2A and tan 2A; and the expression of a sin θ + b cos θ in the forms R sin(θ ± α) and R cos(θ ± α)",
      "sourceDocumentId": "caie-9709-2026-2027-v4",
      "sourcePage": 27,
      "sourceType": "official",
      "verificationStatus": "verified"
    },
    {
      "id": "caie-9709-2026-2027-3.4-lo-01",
      "topicId": "caie-9709-2026-2027-topic-3-4",
      "ordinal": 1,
      "officialText": "use the derivatives of eˣ, ln x, sin x, cos x, tan x, tan⁻¹x, together with constant multiples, sums, differences and composites",
      "sourceDocumentId": "caie-9709-2026-2027-v4",
      "sourcePage": 28,
      "sourceType": "official",
      "verificationStatus": "verified"
    },
    {
      "id": "caie-9709-2026-2027-3.4-lo-02",
      "topicId": "caie-9709-2026-2027-topic-3-4",
      "ordinal": 2,
      "officialText": "differentiate products and quotients",
      "sourceDocumentId": "caie-9709-2026-2027-v4",
      "sourcePage": 28,
      "sourceType": "official",
      "verificationStatus": "verified"
    },
    {
      "id": "caie-9709-2026-2027-3.4-lo-03",
      "topicId": "caie-9709-2026-2027-topic-3-4",
      "ordinal": 3,
      "officialText": "find and use the first derivative of a function which is defined parametrically or implicitly.",
      "sourceDocumentId": "caie-9709-2026-2027-v4",
      "sourcePage": 28,
      "sourceType": "official",
      "verificationStatus": "verified"
    },
    {
      "id": "caie-9709-2026-2027-3.5-lo-01",
      "topicId": "caie-9709-2026-2027-topic-3-5",
      "ordinal": 1,
      "officialText": "extend the idea of ‘reverse differentiation’ to include the integration of e^(ax + b), 1/(ax + b), sin(ax + b), cos(ax + b), sec²(ax + b) and 1/(x² + a²)",
      "sourceDocumentId": "caie-9709-2026-2027-v4",
      "sourcePage": 28,
      "sourceType": "official",
      "verificationStatus": "verified"
    },
    {
      "id": "caie-9709-2026-2027-3.5-lo-02",
      "topicId": "caie-9709-2026-2027-topic-3-5",
      "ordinal": 2,
      "officialText": "use trigonometrical relationships in carrying out integration",
      "sourceDocumentId": "caie-9709-2026-2027-v4",
      "sourcePage": 28,
      "sourceType": "official",
      "verificationStatus": "verified"
    },
    {
      "id": "caie-9709-2026-2027-3.5-lo-03",
      "topicId": "caie-9709-2026-2027-topic-3-5",
      "ordinal": 3,
      "officialText": "integrate rational functions by means of decomposition into partial fractions",
      "sourceDocumentId": "caie-9709-2026-2027-v4",
      "sourcePage": 28,
      "sourceType": "official",
      "verificationStatus": "verified"
    },
    {
      "id": "caie-9709-2026-2027-3.5-lo-04",
      "topicId": "caie-9709-2026-2027-topic-3-5",
      "ordinal": 4,
      "officialText": "recognise an integrand of the form kf′(x)/f(x), and integrate such functions",
      "sourceDocumentId": "caie-9709-2026-2027-v4",
      "sourcePage": 28,
      "sourceType": "official",
      "verificationStatus": "verified"
    },
    {
      "id": "caie-9709-2026-2027-3.5-lo-05",
      "topicId": "caie-9709-2026-2027-topic-3-5",
      "ordinal": 5,
      "officialText": "recognise when an integrand can usefully be regarded as a product, and use integration by parts",
      "sourceDocumentId": "caie-9709-2026-2027-v4",
      "sourcePage": 28,
      "sourceType": "official",
      "verificationStatus": "verified"
    },
    {
      "id": "caie-9709-2026-2027-3.5-lo-06",
      "topicId": "caie-9709-2026-2027-topic-3-5",
      "ordinal": 6,
      "officialText": "use a given substitution to simplify and evaluate either a definite or an indefinite integral.",
      "sourceDocumentId": "caie-9709-2026-2027-v4",
      "sourcePage": 28,
      "sourceType": "official",
      "verificationStatus": "verified"
    },
    {
      "id": "caie-9709-2026-2027-3.6-lo-01",
      "topicId": "caie-9709-2026-2027-topic-3-6",
      "ordinal": 1,
      "officialText": "locate approximately a root of an equation, by means of graphical considerations and/or searching for a sign change",
      "sourceDocumentId": "caie-9709-2026-2027-v4",
      "sourcePage": 29,
      "sourceType": "official",
      "verificationStatus": "verified"
    },
    {
      "id": "caie-9709-2026-2027-3.6-lo-02",
      "topicId": "caie-9709-2026-2027-topic-3-6",
      "ordinal": 2,
      "officialText": "understand the idea of, and use the notation for, a sequence of approximations which converges to a root of an equation",
      "sourceDocumentId": "caie-9709-2026-2027-v4",
      "sourcePage": 29,
      "sourceType": "official",
      "verificationStatus": "verified"
    },
    {
      "id": "caie-9709-2026-2027-3.6-lo-03",
      "topicId": "caie-9709-2026-2027-topic-3-6",
      "ordinal": 3,
      "officialText": "understand how a given simple iterative formula of the form xₙ₊₁ = F(xₙ) relates to the equation being solved, and use a given iteration, or an iteration based on a given rearrangement of an equation, to determine a root to a prescribed degree of accuracy.",
      "sourceDocumentId": "caie-9709-2026-2027-v4",
      "sourcePage": 29,
      "sourceType": "official",
      "verificationStatus": "verified"
    },
    {
      "id": "caie-9709-2026-2027-3.7-lo-01",
      "topicId": "caie-9709-2026-2027-topic-3-7",
      "ordinal": 1,
      "officialText": "use standard notations for vectors, i.e. (x, y), xi + yj, (x, y, z), xi + yj + zk, vector AB and a",
      "sourceDocumentId": "caie-9709-2026-2027-v4",
      "sourcePage": 29,
      "sourceType": "official",
      "verificationStatus": "verified"
    },
    {
      "id": "caie-9709-2026-2027-3.7-lo-02",
      "topicId": "caie-9709-2026-2027-topic-3-7",
      "ordinal": 2,
      "officialText": "carry out addition and subtraction of vectors and multiplication of a vector by a scalar, and interpret these operations in geometrical terms",
      "sourceDocumentId": "caie-9709-2026-2027-v4",
      "sourcePage": 29,
      "sourceType": "official",
      "verificationStatus": "verified"
    },
    {
      "id": "caie-9709-2026-2027-3.7-lo-03",
      "topicId": "caie-9709-2026-2027-topic-3-7",
      "ordinal": 3,
      "officialText": "calculate the magnitude of a vector, and use unit vectors, displacement vectors and position vectors",
      "sourceDocumentId": "caie-9709-2026-2027-v4",
      "sourcePage": 29,
      "sourceType": "official",
      "verificationStatus": "verified"
    },
    {
      "id": "caie-9709-2026-2027-3.7-lo-04",
      "topicId": "caie-9709-2026-2027-topic-3-7",
      "ordinal": 4,
      "officialText": "understand the significance of all the symbols used when the equation of a straight line is expressed in the form r = a + tb, and find the equation of a line, given sufficient information",
      "sourceDocumentId": "caie-9709-2026-2027-v4",
      "sourcePage": 29,
      "sourceType": "official",
      "verificationStatus": "verified"
    },
    {
      "id": "caie-9709-2026-2027-3.7-lo-05",
      "topicId": "caie-9709-2026-2027-topic-3-7",
      "ordinal": 5,
      "officialText": "determine whether two lines are parallel, intersect or are skew, and find the point of intersection of two lines when it exists",
      "sourceDocumentId": "caie-9709-2026-2027-v4",
      "sourcePage": 29,
      "sourceType": "official",
      "verificationStatus": "verified"
    },
    {
      "id": "caie-9709-2026-2027-3.7-lo-06",
      "topicId": "caie-9709-2026-2027-topic-3-7",
      "ordinal": 6,
      "officialText": "use formulae to calculate the scalar product of two vectors, and use scalar products in problems involving lines and points.",
      "sourceDocumentId": "caie-9709-2026-2027-v4",
      "sourcePage": 29,
      "sourceType": "official",
      "verificationStatus": "verified"
    },
    {
      "id": "caie-9709-2026-2027-3.8-lo-01",
      "topicId": "caie-9709-2026-2027-topic-3-8",
      "ordinal": 1,
      "officialText": "formulate a simple statement involving a rate of change as a differential equation",
      "sourceDocumentId": "caie-9709-2026-2027-v4",
      "sourcePage": 30,
      "sourceType": "official",
      "verificationStatus": "verified"
    },
    {
      "id": "caie-9709-2026-2027-3.8-lo-02",
      "topicId": "caie-9709-2026-2027-topic-3-8",
      "ordinal": 2,
      "officialText": "find by integration a general form of solution for a first order differential equation in which the variables are separable",
      "sourceDocumentId": "caie-9709-2026-2027-v4",
      "sourcePage": 30,
      "sourceType": "official",
      "verificationStatus": "verified"
    },
    {
      "id": "caie-9709-2026-2027-3.8-lo-03",
      "topicId": "caie-9709-2026-2027-topic-3-8",
      "ordinal": 3,
      "officialText": "use an initial condition to find a particular solution",
      "sourceDocumentId": "caie-9709-2026-2027-v4",
      "sourcePage": 30,
      "sourceType": "official",
      "verificationStatus": "verified"
    },
    {
      "id": "caie-9709-2026-2027-3.8-lo-04",
      "topicId": "caie-9709-2026-2027-topic-3-8",
      "ordinal": 4,
      "officialText": "interpret the solution of a differential equation in the context of a problem being modelled by the equation.",
      "sourceDocumentId": "caie-9709-2026-2027-v4",
      "sourcePage": 30,
      "sourceType": "official",
      "verificationStatus": "verified"
    },
    {
      "id": "caie-9709-2026-2027-3.9-lo-01",
      "topicId": "caie-9709-2026-2027-topic-3-9",
      "ordinal": 1,
      "officialText": "understand the idea of a complex number, recall the meaning of the terms real part, imaginary part, modulus, argument, conjugate, and use the fact that two complex numbers are equal if and only if both real and imaginary parts are equal",
      "sourceDocumentId": "caie-9709-2026-2027-v4",
      "sourcePage": 30,
      "sourceType": "official",
      "verificationStatus": "verified"
    },
    {
      "id": "caie-9709-2026-2027-3.9-lo-02",
      "topicId": "caie-9709-2026-2027-topic-3-9",
      "ordinal": 2,
      "officialText": "carry out operations of addition, subtraction, multiplication and division of two complex numbers expressed in Cartesian form x + iy",
      "sourceDocumentId": "caie-9709-2026-2027-v4",
      "sourcePage": 30,
      "sourceType": "official",
      "verificationStatus": "verified"
    },
    {
      "id": "caie-9709-2026-2027-3.9-lo-03",
      "topicId": "caie-9709-2026-2027-topic-3-9",
      "ordinal": 3,
      "officialText": "use the result that, for a polynomial equation with real coefficients, any non-real roots occur in conjugate pairs",
      "sourceDocumentId": "caie-9709-2026-2027-v4",
      "sourcePage": 30,
      "sourceType": "official",
      "verificationStatus": "verified"
    },
    {
      "id": "caie-9709-2026-2027-3.9-lo-04",
      "topicId": "caie-9709-2026-2027-topic-3-9",
      "ordinal": 4,
      "officialText": "represent complex numbers geometrically by means of an Argand diagram",
      "sourceDocumentId": "caie-9709-2026-2027-v4",
      "sourcePage": 30,
      "sourceType": "official",
      "verificationStatus": "verified"
    },
    {
      "id": "caie-9709-2026-2027-3.9-lo-05",
      "topicId": "caie-9709-2026-2027-topic-3-9",
      "ordinal": 5,
      "officialText": "carry out operations of multiplication and division of two complex numbers expressed in polar form r(cos θ + i sin θ) = re^(iθ)",
      "sourceDocumentId": "caie-9709-2026-2027-v4",
      "sourcePage": 30,
      "sourceType": "official",
      "verificationStatus": "verified"
    },
    {
      "id": "caie-9709-2026-2027-3.9-lo-06",
      "topicId": "caie-9709-2026-2027-topic-3-9",
      "ordinal": 6,
      "officialText": "find the two square roots of a complex number",
      "sourceDocumentId": "caie-9709-2026-2027-v4",
      "sourcePage": 30,
      "sourceType": "official",
      "verificationStatus": "verified"
    },
    {
      "id": "caie-9709-2026-2027-3.9-lo-07",
      "topicId": "caie-9709-2026-2027-topic-3-9",
      "ordinal": 7,
      "officialText": "understand in simple terms the geometrical effects of conjugating a complex number and of adding, subtracting, multiplying and dividing two complex numbers",
      "sourceDocumentId": "caie-9709-2026-2027-v4",
      "sourcePage": 30,
      "sourceType": "official",
      "verificationStatus": "verified"
    },
    {
      "id": "caie-9709-2026-2027-3.9-lo-08",
      "topicId": "caie-9709-2026-2027-topic-3-9",
      "ordinal": 8,
      "officialText": "illustrate simple equations and inequalities involving complex numbers by means of loci in an Argand diagram",
      "sourceDocumentId": "caie-9709-2026-2027-v4",
      "sourcePage": 30,
      "sourceType": "official",
      "verificationStatus": "verified"
    },
    {
      "id": "caie-9709-2026-2027-4.1-lo-01",
      "topicId": "caie-9709-2026-2027-topic-4-1",
      "ordinal": 1,
      "officialText": "identify the forces acting in a given situation",
      "sourceDocumentId": "caie-9709-2026-2027-v4",
      "sourcePage": 31,
      "sourceType": "official",
      "verificationStatus": "verified"
    },
    {
      "id": "caie-9709-2026-2027-4.1-lo-02",
      "topicId": "caie-9709-2026-2027-topic-4-1",
      "ordinal": 2,
      "officialText": "understand the vector nature of force, and find and use components and resultants",
      "sourceDocumentId": "caie-9709-2026-2027-v4",
      "sourcePage": 31,
      "sourceType": "official",
      "verificationStatus": "verified"
    },
    {
      "id": "caie-9709-2026-2027-4.1-lo-03",
      "topicId": "caie-9709-2026-2027-topic-4-1",
      "ordinal": 3,
      "officialText": "use the principle that, when a particle is in equilibrium, the vector sum of the forces acting is zero, or equivalently, that the sum of the components in any direction is zero",
      "sourceDocumentId": "caie-9709-2026-2027-v4",
      "sourcePage": 31,
      "sourceType": "official",
      "verificationStatus": "verified"
    },
    {
      "id": "caie-9709-2026-2027-4.1-lo-04",
      "topicId": "caie-9709-2026-2027-topic-4-1",
      "ordinal": 4,
      "officialText": "understand that a contact force between two surfaces can be represented by two components, the normal component and the frictional component",
      "sourceDocumentId": "caie-9709-2026-2027-v4",
      "sourcePage": 31,
      "sourceType": "official",
      "verificationStatus": "verified"
    },
    {
      "id": "caie-9709-2026-2027-4.1-lo-05",
      "topicId": "caie-9709-2026-2027-topic-4-1",
      "ordinal": 5,
      "officialText": "use the model of a ‘smooth' contact, and understand the limitations of this model",
      "sourceDocumentId": "caie-9709-2026-2027-v4",
      "sourcePage": 31,
      "sourceType": "official",
      "verificationStatus": "verified"
    },
    {
      "id": "caie-9709-2026-2027-4.1-lo-06",
      "topicId": "caie-9709-2026-2027-topic-4-1",
      "ordinal": 6,
      "officialText": "understand the concepts of limiting friction and limiting equilibrium, recall the definition of coefficient of friction, and use the relationship F = μR or F ≤ μR, as appropriate",
      "sourceDocumentId": "caie-9709-2026-2027-v4",
      "sourcePage": 31,
      "sourceType": "official",
      "verificationStatus": "verified"
    },
    {
      "id": "caie-9709-2026-2027-4.1-lo-07",
      "topicId": "caie-9709-2026-2027-topic-4-1",
      "ordinal": 7,
      "officialText": "use Newton's third law.",
      "sourceDocumentId": "caie-9709-2026-2027-v4",
      "sourcePage": 31,
      "sourceType": "official",
      "verificationStatus": "verified"
    },
    {
      "id": "caie-9709-2026-2027-4.2-lo-01",
      "topicId": "caie-9709-2026-2027-topic-4-2",
      "ordinal": 1,
      "officialText": "understand the concepts of distance and speed as scalar quantities, and of displacement, velocity and acceleration as vector quantities",
      "sourceDocumentId": "caie-9709-2026-2027-v4",
      "sourcePage": 32,
      "sourceType": "official",
      "verificationStatus": "verified"
    },
    {
      "id": "caie-9709-2026-2027-4.2-lo-02",
      "topicId": "caie-9709-2026-2027-topic-4-2",
      "ordinal": 2,
      "officialText": "sketch and interpret displacement-time graphs and velocity-time graphs, and in particular appreciate that - the area under a velocity-time graph represents displacement, - the gradient of a displacement-time graph represents velocity, - the gradient of a velocity-time graph represents acceleration",
      "sourceDocumentId": "caie-9709-2026-2027-v4",
      "sourcePage": 32,
      "sourceType": "official",
      "verificationStatus": "verified"
    },
    {
      "id": "caie-9709-2026-2027-4.2-lo-03",
      "topicId": "caie-9709-2026-2027-topic-4-2",
      "ordinal": 3,
      "officialText": "use differentiation and integration with respect to time to solve simple problems concerning displacement, velocity and acceleration",
      "sourceDocumentId": "caie-9709-2026-2027-v4",
      "sourcePage": 32,
      "sourceType": "official",
      "verificationStatus": "verified"
    },
    {
      "id": "caie-9709-2026-2027-4.2-lo-04",
      "topicId": "caie-9709-2026-2027-topic-4-2",
      "ordinal": 4,
      "officialText": "use appropriate formulae for motion with constant acceleration in a straight line.",
      "sourceDocumentId": "caie-9709-2026-2027-v4",
      "sourcePage": 32,
      "sourceType": "official",
      "verificationStatus": "verified"
    },
    {
      "id": "caie-9709-2026-2027-4.3-lo-01",
      "topicId": "caie-9709-2026-2027-topic-4-3",
      "ordinal": 1,
      "officialText": "use the definition of linear momentum and show understanding of its vector nature",
      "sourceDocumentId": "caie-9709-2026-2027-v4",
      "sourcePage": 32,
      "sourceType": "official",
      "verificationStatus": "verified"
    },
    {
      "id": "caie-9709-2026-2027-4.3-lo-02",
      "topicId": "caie-9709-2026-2027-topic-4-3",
      "ordinal": 2,
      "officialText": "use conservation of linear momentum to solve problems that may be modelled as the direct impact of two bodies.",
      "sourceDocumentId": "caie-9709-2026-2027-v4",
      "sourcePage": 32,
      "sourceType": "official",
      "verificationStatus": "verified"
    },
    {
      "id": "caie-9709-2026-2027-4.4-lo-01",
      "topicId": "caie-9709-2026-2027-topic-4-4",
      "ordinal": 1,
      "officialText": "apply Newton's laws of motion to the linear motion of a particle of constant mass moving under the action of constant forces, which may include friction, tension in an inextensible string and thrust in a connecting rod",
      "sourceDocumentId": "caie-9709-2026-2027-v4",
      "sourcePage": 33,
      "sourceType": "official",
      "verificationStatus": "verified"
    },
    {
      "id": "caie-9709-2026-2027-4.4-lo-02",
      "topicId": "caie-9709-2026-2027-topic-4-4",
      "ordinal": 2,
      "officialText": "use the relationship between mass and weight",
      "sourceDocumentId": "caie-9709-2026-2027-v4",
      "sourcePage": 33,
      "sourceType": "official",
      "verificationStatus": "verified"
    },
    {
      "id": "caie-9709-2026-2027-4.4-lo-03",
      "topicId": "caie-9709-2026-2027-topic-4-4",
      "ordinal": 3,
      "officialText": "solve simple problems which may be modelled as the motion of a particle moving vertically or on an inclined plane with constant acceleration",
      "sourceDocumentId": "caie-9709-2026-2027-v4",
      "sourcePage": 33,
      "sourceType": "official",
      "verificationStatus": "verified"
    },
    {
      "id": "caie-9709-2026-2027-4.4-lo-04",
      "topicId": "caie-9709-2026-2027-topic-4-4",
      "ordinal": 4,
      "officialText": "solve simple problems which may be modelled as the motion of connected particles.",
      "sourceDocumentId": "caie-9709-2026-2027-v4",
      "sourcePage": 33,
      "sourceType": "official",
      "verificationStatus": "verified"
    },
    {
      "id": "caie-9709-2026-2027-4.5-lo-01",
      "topicId": "caie-9709-2026-2027-topic-4-5",
      "ordinal": 1,
      "officialText": "understand the concept of the work done by a force, and calculate the work done by a constant force when its point of application undergoes a displacement not necessarily parallel to the force",
      "sourceDocumentId": "caie-9709-2026-2027-v4",
      "sourcePage": 33,
      "sourceType": "official",
      "verificationStatus": "verified"
    },
    {
      "id": "caie-9709-2026-2027-4.5-lo-02",
      "topicId": "caie-9709-2026-2027-topic-4-5",
      "ordinal": 2,
      "officialText": "understand the concepts of gravitational potential energy and kinetic energy, and use appropriate formulae",
      "sourceDocumentId": "caie-9709-2026-2027-v4",
      "sourcePage": 33,
      "sourceType": "official",
      "verificationStatus": "verified"
    },
    {
      "id": "caie-9709-2026-2027-4.5-lo-03",
      "topicId": "caie-9709-2026-2027-topic-4-5",
      "ordinal": 3,
      "officialText": "understand and use the relationship between the change in energy of a system and the work done by the external forces, and use in appropriate cases the principle of conservation of energy",
      "sourceDocumentId": "caie-9709-2026-2027-v4",
      "sourcePage": 33,
      "sourceType": "official",
      "verificationStatus": "verified"
    },
    {
      "id": "caie-9709-2026-2027-4.5-lo-04",
      "topicId": "caie-9709-2026-2027-topic-4-5",
      "ordinal": 4,
      "officialText": "use the definition of power as the rate at which a force does work, and use the relationship between power, force and velocity for a force acting in the direction of motion",
      "sourceDocumentId": "caie-9709-2026-2027-v4",
      "sourcePage": 33,
      "sourceType": "official",
      "verificationStatus": "verified"
    },
    {
      "id": "caie-9709-2026-2027-4.5-lo-05",
      "topicId": "caie-9709-2026-2027-topic-4-5",
      "ordinal": 5,
      "officialText": "solve problems involving, for example, the instantaneous acceleration of a car moving on a hill against a resistance.",
      "sourceDocumentId": "caie-9709-2026-2027-v4",
      "sourcePage": 33,
      "sourceType": "official",
      "verificationStatus": "verified"
    },
    {
      "id": "caie-9709-2026-2027-5.1-lo-01",
      "topicId": "caie-9709-2026-2027-topic-5-1",
      "ordinal": 1,
      "officialText": "select a suitable way of presenting raw statistical data, and discuss advantages and/ or disadvantages that particular representations may have",
      "sourceDocumentId": "caie-9709-2026-2027-v4",
      "sourcePage": 34,
      "sourceType": "official",
      "verificationStatus": "verified"
    },
    {
      "id": "caie-9709-2026-2027-5.1-lo-02",
      "topicId": "caie-9709-2026-2027-topic-5-1",
      "ordinal": 2,
      "officialText": "draw and interpret stem-and-leaf diagrams, box-and-whisker plots, histograms and cumulative frequency graphs",
      "sourceDocumentId": "caie-9709-2026-2027-v4",
      "sourcePage": 34,
      "sourceType": "official",
      "verificationStatus": "verified"
    },
    {
      "id": "caie-9709-2026-2027-5.1-lo-03",
      "topicId": "caie-9709-2026-2027-topic-5-1",
      "ordinal": 3,
      "officialText": "understand and use different measures of central tendency (mean, median, mode) and variation (range, interquartile range, standard deviation)",
      "sourceDocumentId": "caie-9709-2026-2027-v4",
      "sourcePage": 34,
      "sourceType": "official",
      "verificationStatus": "verified"
    },
    {
      "id": "caie-9709-2026-2027-5.1-lo-04",
      "topicId": "caie-9709-2026-2027-topic-5-1",
      "ordinal": 4,
      "officialText": "use a cumulative frequency graph",
      "sourceDocumentId": "caie-9709-2026-2027-v4",
      "sourcePage": 34,
      "sourceType": "official",
      "verificationStatus": "verified"
    },
    {
      "id": "caie-9709-2026-2027-5.1-lo-05",
      "topicId": "caie-9709-2026-2027-topic-5-1",
      "ordinal": 5,
      "officialText": "calculate and use the mean and standard deviation of a set of data (including grouped data) either from the data itself or from given totals Σx and Σx², or coded totals Σ(x − a) and Σ(x − a)², and use such totals in solving problems which may involve up to two data sets.",
      "sourceDocumentId": "caie-9709-2026-2027-v4",
      "sourcePage": 34,
      "sourceType": "official",
      "verificationStatus": "verified"
    },
    {
      "id": "caie-9709-2026-2027-5.2-lo-01",
      "topicId": "caie-9709-2026-2027-topic-5-2",
      "ordinal": 1,
      "officialText": "understand the terms permutation and combination, and solve simple problems involving selections",
      "sourceDocumentId": "caie-9709-2026-2027-v4",
      "sourcePage": 34,
      "sourceType": "official",
      "verificationStatus": "verified"
    },
    {
      "id": "caie-9709-2026-2027-5.2-lo-02",
      "topicId": "caie-9709-2026-2027-topic-5-2",
      "ordinal": 2,
      "officialText": "solve problems about arrangements of objects in a line, including those involving - repetition (e.g. the number of ways of arranging the letters of the word ‘NEEDLESS') - restriction (e.g. the number of ways several people can stand in a line if two particular people must, or must not, stand next to each other).",
      "sourceDocumentId": "caie-9709-2026-2027-v4",
      "sourcePage": 34,
      "sourceType": "official",
      "verificationStatus": "verified"
    },
    {
      "id": "caie-9709-2026-2027-5.3-lo-01",
      "topicId": "caie-9709-2026-2027-topic-5-3",
      "ordinal": 1,
      "officialText": "evaluate probabilities in simple cases by means of enumeration of equiprobable elementary events, or by calculation using permutations or combinations",
      "sourceDocumentId": "caie-9709-2026-2027-v4",
      "sourcePage": 35,
      "sourceType": "official",
      "verificationStatus": "verified"
    },
    {
      "id": "caie-9709-2026-2027-5.3-lo-02",
      "topicId": "caie-9709-2026-2027-topic-5-3",
      "ordinal": 2,
      "officialText": "use addition and multiplication of probabilities, as appropriate, in simple cases",
      "sourceDocumentId": "caie-9709-2026-2027-v4",
      "sourcePage": 35,
      "sourceType": "official",
      "verificationStatus": "verified"
    },
    {
      "id": "caie-9709-2026-2027-5.3-lo-03",
      "topicId": "caie-9709-2026-2027-topic-5-3",
      "ordinal": 3,
      "officialText": "understand the meaning of exclusive and independent events, including determination of whether events A and B are independent by comparing the values of P(A ∩ B) and P(A) × P(B)",
      "sourceDocumentId": "caie-9709-2026-2027-v4",
      "sourcePage": 35,
      "sourceType": "official",
      "verificationStatus": "verified"
    },
    {
      "id": "caie-9709-2026-2027-5.3-lo-04",
      "topicId": "caie-9709-2026-2027-topic-5-3",
      "ordinal": 4,
      "officialText": "calculate and use conditional probabilities in simple cases.",
      "sourceDocumentId": "caie-9709-2026-2027-v4",
      "sourcePage": 35,
      "sourceType": "official",
      "verificationStatus": "verified"
    },
    {
      "id": "caie-9709-2026-2027-5.4-lo-01",
      "topicId": "caie-9709-2026-2027-topic-5-4",
      "ordinal": 1,
      "officialText": "draw up a probability distribution table relating to a given situation involving a discrete random variable X, and calculate E(X) and Var(X)",
      "sourceDocumentId": "caie-9709-2026-2027-v4",
      "sourcePage": 35,
      "sourceType": "official",
      "verificationStatus": "verified"
    },
    {
      "id": "caie-9709-2026-2027-5.4-lo-02",
      "topicId": "caie-9709-2026-2027-topic-5-4",
      "ordinal": 2,
      "officialText": "use formulae for probabilities for the binomial and geometric distributions, and recognise practical situations where these distributions are suitable models",
      "sourceDocumentId": "caie-9709-2026-2027-v4",
      "sourcePage": 35,
      "sourceType": "official",
      "verificationStatus": "verified"
    },
    {
      "id": "caie-9709-2026-2027-5.4-lo-03",
      "topicId": "caie-9709-2026-2027-topic-5-4",
      "ordinal": 3,
      "officialText": "use formulae for the expectation and variance of the binomial distribution and for the expectation of the geometric distribution.",
      "sourceDocumentId": "caie-9709-2026-2027-v4",
      "sourcePage": 35,
      "sourceType": "official",
      "verificationStatus": "verified"
    },
    {
      "id": "caie-9709-2026-2027-5.5-lo-01",
      "topicId": "caie-9709-2026-2027-topic-5-5",
      "ordinal": 1,
      "officialText": "understand the use of a normal distribution to model a continuous random variable, and use normal distribution tables",
      "sourceDocumentId": "caie-9709-2026-2027-v4",
      "sourcePage": 36,
      "sourceType": "official",
      "verificationStatus": "verified"
    },
    {
      "id": "caie-9709-2026-2027-5.5-lo-02",
      "topicId": "caie-9709-2026-2027-topic-5-5",
      "ordinal": 2,
      "officialText": "solve problems concerning a variable X, where X ~ N(μ, σ²), including finding the value of P(X > x₁), or a related probability, given the values of x₁, μ, σ; and finding a relationship between x₁, μ and σ given the value of P(X > x₁) or a related probability",
      "sourceDocumentId": "caie-9709-2026-2027-v4",
      "sourcePage": 36,
      "sourceType": "official",
      "verificationStatus": "verified"
    },
    {
      "id": "caie-9709-2026-2027-5.5-lo-03",
      "topicId": "caie-9709-2026-2027-topic-5-5",
      "ordinal": 3,
      "officialText": "recall conditions under which the normal distribution can be used as an approximation to the binomial distribution, and use this approximation, with a continuity correction, in solving problems.",
      "sourceDocumentId": "caie-9709-2026-2027-v4",
      "sourcePage": 36,
      "sourceType": "official",
      "verificationStatus": "verified"
    },
    {
      "id": "caie-9709-2026-2027-6.1-lo-01",
      "topicId": "caie-9709-2026-2027-topic-6-1",
      "ordinal": 1,
      "officialText": "use formulae to calculate probabilities for the Po(λ) distribution",
      "sourceDocumentId": "caie-9709-2026-2027-v4",
      "sourcePage": 37,
      "sourceType": "official",
      "verificationStatus": "verified"
    },
    {
      "id": "caie-9709-2026-2027-6.1-lo-02",
      "topicId": "caie-9709-2026-2027-topic-6-1",
      "ordinal": 2,
      "officialText": "use the fact that if X ~ Po(λ) then the mean and variance of X are each equal to λ",
      "sourceDocumentId": "caie-9709-2026-2027-v4",
      "sourcePage": 37,
      "sourceType": "official",
      "verificationStatus": "verified"
    },
    {
      "id": "caie-9709-2026-2027-6.1-lo-03",
      "topicId": "caie-9709-2026-2027-topic-6-1",
      "ordinal": 3,
      "officialText": "understand the relevance of the Poisson distribution to the distribution of random events, and use the Poisson distribution as a model",
      "sourceDocumentId": "caie-9709-2026-2027-v4",
      "sourcePage": 37,
      "sourceType": "official",
      "verificationStatus": "verified"
    },
    {
      "id": "caie-9709-2026-2027-6.1-lo-04",
      "topicId": "caie-9709-2026-2027-topic-6-1",
      "ordinal": 4,
      "officialText": "use the Poisson distribution as an approximation to the binomial distribution where appropriate",
      "sourceDocumentId": "caie-9709-2026-2027-v4",
      "sourcePage": 37,
      "sourceType": "official",
      "verificationStatus": "verified"
    },
    {
      "id": "caie-9709-2026-2027-6.1-lo-05",
      "topicId": "caie-9709-2026-2027-topic-6-1",
      "ordinal": 5,
      "officialText": "use the normal distribution, with continuity correction, as an approximation to the Poisson distribution where appropriate.",
      "sourceDocumentId": "caie-9709-2026-2027-v4",
      "sourcePage": 37,
      "sourceType": "official",
      "verificationStatus": "verified"
    },
    {
      "id": "caie-9709-2026-2027-6.2-lo-01",
      "topicId": "caie-9709-2026-2027-topic-6-2",
      "ordinal": 1,
      "officialText": "use, when solving problems, the results that E(aX + b) = aE(X) + b and Var(aX + b) = a²Var(X); E(aX + bY) = aE(X) + bE(Y); Var(aX + bY) = a²Var(X) + b²Var(Y) for independent X and Y; if X has a normal distribution then so does aX + b; if X and Y have independent normal distributions then aX + bY has a normal distribution; and if X and Y have independent Poisson distributions then X + Y has a Poisson distribution.",
      "sourceDocumentId": "caie-9709-2026-2027-v4",
      "sourcePage": 37,
      "sourceType": "official",
      "verificationStatus": "verified"
    },
    {
      "id": "caie-9709-2026-2027-6.3-lo-01",
      "topicId": "caie-9709-2026-2027-topic-6-3",
      "ordinal": 1,
      "officialText": "understand the concept of a continuous random variable, and recall and use properties of a probability density function",
      "sourceDocumentId": "caie-9709-2026-2027-v4",
      "sourcePage": 38,
      "sourceType": "official",
      "verificationStatus": "verified"
    },
    {
      "id": "caie-9709-2026-2027-6.3-lo-02",
      "topicId": "caie-9709-2026-2027-topic-6-3",
      "ordinal": 2,
      "officialText": "use a probability density function to solve problems involving probabilities, and to calculate the mean and variance of a distribution.",
      "sourceDocumentId": "caie-9709-2026-2027-v4",
      "sourcePage": 38,
      "sourceType": "official",
      "verificationStatus": "verified"
    },
    {
      "id": "caie-9709-2026-2027-6.4-lo-01",
      "topicId": "caie-9709-2026-2027-topic-6-4",
      "ordinal": 1,
      "officialText": "understand the distinction between a sample and a population, and appreciate the necessity for randomness in choosing samples",
      "sourceDocumentId": "caie-9709-2026-2027-v4",
      "sourcePage": 38,
      "sourceType": "official",
      "verificationStatus": "verified"
    },
    {
      "id": "caie-9709-2026-2027-6.4-lo-02",
      "topicId": "caie-9709-2026-2027-topic-6-4",
      "ordinal": 2,
      "officialText": "explain in simple terms why a given sampling method may be unsatisfactory",
      "sourceDocumentId": "caie-9709-2026-2027-v4",
      "sourcePage": 38,
      "sourceType": "official",
      "verificationStatus": "verified"
    },
    {
      "id": "caie-9709-2026-2027-6.4-lo-03",
      "topicId": "caie-9709-2026-2027-topic-6-4",
      "ordinal": 3,
      "officialText": "recognise that a sample mean can be regarded as a random variable, and use the facts that E(X̄) = μ and Var(X̄) = σ²/n",
      "sourceDocumentId": "caie-9709-2026-2027-v4",
      "sourcePage": 38,
      "sourceType": "official",
      "verificationStatus": "verified"
    },
    {
      "id": "caie-9709-2026-2027-6.4-lo-04",
      "topicId": "caie-9709-2026-2027-topic-6-4",
      "ordinal": 4,
      "officialText": "use the fact that X̄ has a normal distribution if X has a normal distribution",
      "sourceDocumentId": "caie-9709-2026-2027-v4",
      "sourcePage": 38,
      "sourceType": "official",
      "verificationStatus": "verified"
    },
    {
      "id": "caie-9709-2026-2027-6.4-lo-05",
      "topicId": "caie-9709-2026-2027-topic-6-4",
      "ordinal": 5,
      "officialText": "use the Central Limit Theorem where appropriate",
      "sourceDocumentId": "caie-9709-2026-2027-v4",
      "sourcePage": 38,
      "sourceType": "official",
      "verificationStatus": "verified"
    },
    {
      "id": "caie-9709-2026-2027-6.4-lo-06",
      "topicId": "caie-9709-2026-2027-topic-6-4",
      "ordinal": 6,
      "officialText": "calculate unbiased estimates of the population mean and variance from a sample, using either raw or summarised data",
      "sourceDocumentId": "caie-9709-2026-2027-v4",
      "sourcePage": 38,
      "sourceType": "official",
      "verificationStatus": "verified"
    },
    {
      "id": "caie-9709-2026-2027-6.4-lo-07",
      "topicId": "caie-9709-2026-2027-topic-6-4",
      "ordinal": 7,
      "officialText": "determine and interpret a confidence interval for a population mean in cases where the population is normally distributed with known variance or where a large sample is used",
      "sourceDocumentId": "caie-9709-2026-2027-v4",
      "sourcePage": 38,
      "sourceType": "official",
      "verificationStatus": "verified"
    },
    {
      "id": "caie-9709-2026-2027-6.4-lo-08",
      "topicId": "caie-9709-2026-2027-topic-6-4",
      "ordinal": 8,
      "officialText": "determine, from a large sample, an approximate confidence interval for a population proportion.",
      "sourceDocumentId": "caie-9709-2026-2027-v4",
      "sourcePage": 38,
      "sourceType": "official",
      "verificationStatus": "verified"
    },
    {
      "id": "caie-9709-2026-2027-6.5-lo-01",
      "topicId": "caie-9709-2026-2027-topic-6-5",
      "ordinal": 1,
      "officialText": "understand the nature of a hypothesis test, the difference between one-tailed and two-tailed tests, and the terms null hypothesis, alternative hypothesis, significance level, rejection region (or critical region), acceptance region and test statistic",
      "sourceDocumentId": "caie-9709-2026-2027-v4",
      "sourcePage": 39,
      "sourceType": "official",
      "verificationStatus": "verified"
    },
    {
      "id": "caie-9709-2026-2027-6.5-lo-02",
      "topicId": "caie-9709-2026-2027-topic-6-5",
      "ordinal": 2,
      "officialText": "formulate hypotheses and carry out a hypothesis test in the context of a single observation from a population which has a binomial or Poisson distribution, using - direct evaluation of probabilities - a normal approximation to the binomial or the Poisson distribution, where appropriate",
      "sourceDocumentId": "caie-9709-2026-2027-v4",
      "sourcePage": 39,
      "sourceType": "official",
      "verificationStatus": "verified"
    },
    {
      "id": "caie-9709-2026-2027-6.5-lo-03",
      "topicId": "caie-9709-2026-2027-topic-6-5",
      "ordinal": 3,
      "officialText": "formulate hypotheses and carry out a hypothesis test concerning the population mean in cases where the population is normally distributed with known variance or where a large sample is used",
      "sourceDocumentId": "caie-9709-2026-2027-v4",
      "sourcePage": 39,
      "sourceType": "official",
      "verificationStatus": "verified"
    },
    {
      "id": "caie-9709-2026-2027-6.5-lo-04",
      "topicId": "caie-9709-2026-2027-topic-6-5",
      "ordinal": 4,
      "officialText": "understand the terms Type I error and Type II error in relation to hypothesis tests",
      "sourceDocumentId": "caie-9709-2026-2027-v4",
      "sourcePage": 39,
      "sourceType": "official",
      "verificationStatus": "verified"
    },
    {
      "id": "caie-9709-2026-2027-6.5-lo-05",
      "topicId": "caie-9709-2026-2027-topic-6-5",
      "ordinal": 5,
      "officialText": "calculate the probabilities of making Type I and Type II errors in specific situations involving tests based on a normal distribution or direct evaluation of binomial or Poisson probabilities.",
      "sourceDocumentId": "caie-9709-2026-2027-v4",
      "sourcePage": 39,
      "sourceType": "official",
      "verificationStatus": "verified"
    }
  ]
} satisfies SyllabusCatalog;
