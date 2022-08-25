import React from "react";
import styled from "styled-components";

const HeadLine = styled.p`
  font-size: 24px;
  color: #222222;
  margin-top: 100px;
`;

const Container = styled.div`
  border-top: 1px solid #eee;
  padding: 0 15px;
  margin-bottom: 20px;
  box-sizing: border-box;
`;
const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  padding: 0;

  & i{
    color: #999;
    font-size: 24px;
  }
`;

const Ul = styled.ul`
  margin: 0;
  padding: 0;
  padding: 0 15px;
  width:90%;
  color: #666;
  font-size: 13px;
`;
export const Details = () => {
  return (
    <div>
      <HeadLine>Fresho Onion (Loose)</HeadLine>
      <div>
        <Container>
          <Flex>
            <p>About the Product</p>
            <i class="fa-solid fa-plus"></i>
          </Flex>
          <div>
            <Ul>
              <li>
                Onions are known to be rich in biotin. Most of the flavonoids
                which are known as anti-oxidants are concentrated more in the
                outer layers, so when you peel off the layers, you should remove
                as little as possible.
              </li>
            </Ul>
          </div>
        </Container>

        <Container>
          <Flex>
            <p>Benefits</p>
            <i class="fa-solid fa-plus"></i>
          </Flex>
          <div>
            <Ul>
              <li>
                Onions are high in sulphur, Folic acid, Amino acid, vitamin B6
                and B9. It has high quantities of water and naturally low in
                fat. It is high in phytochemical compounds.
              </li>
              <li>
                Onions are known to have antiseptic, antimicrobial and
                antibiotic properties which help you to get rid of infections.If
                a piece of onion is inhaled, it can slow down or stop nose
                bleeding.
              </li>
            </Ul>
          </div>
        </Container>

        <Container>
          <Flex>
            <p>Storage and Uses</p>
            <i class="fa-solid fa-plus"></i>
          </Flex>
          <div>
            <Ul>
              <li>Store in a cool dry place, need not refridgerate.</li>
              <li>
                Freezing onions, soaking them under water and keeping the root
                intact before chopping are some methods to reduce tears while
                chopping them.
              </li>
            </Ul>
          </div>
        </Container>

        <Container>
          <Flex>
            <p>Other Product Info</p>
            <i class="fa-solid fa-plus"></i>
          </Flex>
          <div>
            <Ul>
              <li>EAN Code: 8400755370205</li>
              <li>Country of origin: India</li>
            </Ul>
          </div>
        </Container>
      </div>
    </div>
  );
};
